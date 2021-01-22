import {BrowserRouter as Router , Route, Link ,Switch} from 'react-router-dom'
import './App.css';
import Login from './login/Login';
import Movies from './movies/Movies';


function App() {
  return (
    <Router>
      

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
