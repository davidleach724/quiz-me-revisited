import './Home.css'
import easyBtn from '../../images/easy_btn.png'
import mediumBtn from '../../images/medium_btn.png'
import hardBtn from '../../images/hard_btn.png'

const Home = () => {

  return (
    <div className='home-container'>
      <div className='category-container'>
        <h3>Select A Category</h3>
      </div>
      <div className='button-container'>
        <img src={ easyBtn } className='difficulty-button'></img>
        <img src={ mediumBtn } className='difficulty-button'></img>
        <img src={ hardBtn } className='difficulty-button'></img>
      </div>
      <div className='lets-play-container'>
        <h3>YOU HAVE SELECTED _____ LEVEL ______</h3>
      </div>
    </div>
  )
}

export default Home