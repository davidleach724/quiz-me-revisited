import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  )
}

export default App;
