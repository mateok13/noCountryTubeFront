import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/home">
        <button>Home (List Videos)</button>
      </Link>
      <Link to="/upload-video">
        <button>Upload Video</button>
      </Link>
    </>
  );
}

export default App;