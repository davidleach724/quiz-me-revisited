import './Home.css';
import easyBtn from '../../images/easy_btn.png';
import mediumBtn from '../../images/medium_btn.png';
import hardBtn from '../../images/hard_btn.png';
import submitBtn from '../../images/submit_btn.png';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { fetchCategories, fetchQuestions } from '../../api calls/apicalls';
import Categories from '../Categories/Categories';

const Home = () => {
  const [difficulty, setDifficulty] = useState('EASY');
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({id: 9, name:'General Knowledge'});

  useEffect(() => {
    if (categories === null) {
      fetchCategories().then((data) => setCategories(data.trivia_categories));
    }
  });

  const handleCategoryChange = (category) => {
    let catID = categories.find(cat => cat.name === category)
    return setSelectedCategory(catID);
  };

  const responseStatus = (response) => {
    if (response.response_code === 0) {
      return window.location.href = "/Questions"
    } else {
      return console.log('nope')
    }
  }

  return (
    <div className="home-container">
      <div className="category-container">
        <h3>Select A Category</h3>
        {categories && (
          <Categories
            categoryData={categories}
            handleCategoryChange={handleCategoryChange}
          />
        )}
      </div>
      <div className="button-container">
        <img
          src={easyBtn}
          className="difficulty-button"
          onClick={() => setDifficulty('EASY')}
        ></img>
        <img
          src={mediumBtn}
          className="difficulty-button"
          onClick={() => setDifficulty('MEDIUM')}
        ></img>
        <img
          src={hardBtn}
          className="difficulty-button"
          onClick={() => setDifficulty('HARD')}
        ></img>
      </div>
      {difficulty && selectedCategory && (
        <div className="lets-play-container">
          <h3>
            YOU SELECTED {selectedCategory.name.toUpperCase()} LEVEL {difficulty}
          </h3>
          <img src={submitBtn} className="submit-button" onClick={() => fetchQuestions(selectedCategory.id, difficulty).then(data => responseStatus(data))}></img>
        </div>
      )}
    </div>
  );
};

export default Home;
