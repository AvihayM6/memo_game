import '../Styles/App.css';
import Footer from './Footer';
// import Header from './Header';
import TreeOnTreeGame from './TreeOnTreeGame';
import FourOnFourGame from './FourOnFourGame';
import TwoOnTwoGame from './TwoOnTwoGame';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App"> 
      <h1>Memory game</h1>
      <Router>
          <Switch>
          <Route exact path="/">
            {/* <Header /> */}
            <Home />
          </Route>
          <Route exact path="/twoontwoGame">
            <TwoOnTwoGame />
          </Route>
          <Route exact path="/treeontreegame">
            <TreeOnTreeGame />
          </Route>
          <Route exact path="/fouronfourgame">
            <FourOnFourGame />
          </Route>
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;


