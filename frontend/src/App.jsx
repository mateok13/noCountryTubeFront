import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './components/formLogin/FormLogin';
import RegisterForm from './components/formRegister/FormRegister'
import Modal from './components/modal/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);

  const openModalLogin = () => {
    console.log('Opening modal login');
    setIsModalLoginOpen(true);
  };

  const closeModalLogin = () => {
    console.log('Closing modal login');
    setIsModalLoginOpen(false);
  };

  const openModalRegister = () => {
    console.log('Opening modal register');
    setIsModalRegisterOpen(true);
  };

  const closeModalRegister = () => {
    console.log('Closing modal register');
    setIsModalRegisterOpen(false);
  };

  return (
    <>
      <Link to="/home">
        <button>Home (List Videos)</button>
      </Link>
      <Link to="/upload-video">
        <button>Upload Video</button>
      </Link>

      <button onClick={openModalLogin}>Login</button>
      <Modal isOpen={isModalLoginOpen} closeModal={closeModalLogin}>
        <LoginForm closeModalLogin={closeModalLogin} openRegisterModal={openModalRegister}/>
      </Modal>
      <Modal isOpen={isModalRegisterOpen} closeModal={closeModalRegister}>
        <RegisterForm />
      </Modal>
    </>
  );
}

export default App;