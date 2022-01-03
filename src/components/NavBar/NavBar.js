import './NavBar.css'
import quizMeLogo from '../../images/logo_quizme.png'
import menuButton from '../../images/menu.png'

const NavBar = () => {

  return (
    <nav>
      <img src={ menuButton } className='menu-button' alt='menu button'></img>
      <img src = { quizMeLogo } className='quiz-me-logo' alt='quiz me logo'></img>
    </nav>
  )
}

export default NavBar