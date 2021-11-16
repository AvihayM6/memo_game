import '../Styles/Home.css';
import {Link} from 'react-router-dom';

const cardImage = [];


function Home() {
  return (
    <div className="home">
        <div className="diff">
            <h4>Choose the level of difficulty for this game:</h4>
        </div>
        <div className="outer">
            <Link to="/twoontwogame" className="btn btn-info rounded-pill button"  role="button">2x2</Link>
            <Link to="/treeontreegame" className="btn btn-info rounded-pill button"  role="button">3x3</Link>
            <Link to="/fouronfourgame" className="btn btn-info rounded-pill button"  role="button">4x4</Link>
        </div>
    </div>
  );
}

export default Home;
