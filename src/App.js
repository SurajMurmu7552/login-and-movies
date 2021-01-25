import {BrowserRouter as Router , Route, Switch , Link} from 'react-router-dom'
import './App.css';
import Login from './login/Login';
import Movies from './movies/Movies';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="links">
            <Link to="/login">  Login  </Link>
          </div>
          <div className="">
            <Link to="/movies">  Movies  </Link>
          </div>
        </Route>
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
