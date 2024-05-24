import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './components/formLogin/FormLogin'
import Modal from './components/modal/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

      <button onClick={openModal}>Login</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <LoginForm />
      </Modal>
    </>
  );
}

export default App;