import '../Styles/Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="home">
        <div className="row">
            <Link to="/treeontreegame" className="btn btn-outline-info col button"  role="button">3x3</Link>
            <Link to="/fouronfourgame" className="btn btn-outline-info col button"  role="button">4x4</Link>
            <Link to="/fiveonfivegame" className="btn btn-outline-info col button"  role="button">5x5</Link>
        </div>
    </div>
  );
}

export default Home;
