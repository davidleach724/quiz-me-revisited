import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import Questions from '../Questions/Questions';
import './App.css';

const App = () => {

  return (
    <main>
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path='/Questions' element= { <Questions /> } />
      </Routes>
      <Footer />
    </main>
  )
}

export default App;
