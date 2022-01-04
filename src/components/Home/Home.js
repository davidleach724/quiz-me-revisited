import './Home.css'
import easyBtn from '../../images/easy_btn.png'
import mediumBtn from '../../images/medium_btn.png'
import hardBtn from '../../images/hard_btn.png'
import { useState } from 'react/cjs/react.development'

const Home = () => {
  const [difficulty, setDifficulty] = useState(null)

  
  return (
    <div className='home-container'>
      <div className='category-container'>
        <h3>Select A Category</h3>
        <h3>CATEGORY DROPDOWN</h3>
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