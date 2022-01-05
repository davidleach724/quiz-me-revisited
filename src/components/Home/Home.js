import './Home.css'
import easyBtn from '../../images/easy_btn.png'
import mediumBtn from '../../images/medium_btn.png'
import hardBtn from '../../images/hard_btn.png'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'
import { fetchCategories } from '../../api calls/apicalls'

const Home = () => {
  const [difficulty, setDifficulty] = useState(null)
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    if (categories === null) {
      fetchCategories()
      .then(data => setCategories(data.trivia_categories))
      .then(data => console.log(data))
    }
  })

  
  return (
    <div className='home-container'>
      <div className='category-container'>
        <h3>Select A Category</h3>
        {categories && <h3>CATEGORY DROPDOWN</h3>}
      </div>
      <div className='button-container'>
        <img src={ easyBtn } className='difficulty-button' onClick={() => setDifficulty('EASY')}></img>
        <img src={ mediumBtn } className='difficulty-button' onClick={() => setDifficulty('MEDIUM')}></img>
        <img src={ hardBtn } className='difficulty-button' onClick={() => setDifficulty('HARD')}></img>
      </div>
      <div className='lets-play-container'>
        <h3>YOU SLECTED ____ LEVEL {difficulty}</h3>
      </div>
    </div>
  )
}

export default Home