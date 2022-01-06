import './NavBar.css'
import quizMeLogo from '../../images/logo_quizme.png'
import menuButton from '../../images/menu.png'
import { useEffect, useRef, useState } from 'react'

const NavBar = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    }

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return() => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isActive])

  return (
    <header>
      <div className='menu-container'>
        <img src={ menuButton } onClick={onClick} className='menu-button' alt='menu button'></img>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li><a href='/Instructions'>Instructions</a></li>
            <li><a href='Scoreboard'>Scoreboard</a></li>
          </ul>
        </nav>
      </div>
      <img src = { quizMeLogo } className='quiz-me-logo' alt='quiz me logo'></img>
    </header>
  )
}

export default NavBar