import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import './App.css';

const App = () => {

  return (
    <main>
      <Routes>
        <Route exact path="/" element={ Home } />
      </Routes>
    </main>
  )
}

export default App;
