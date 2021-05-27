import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
