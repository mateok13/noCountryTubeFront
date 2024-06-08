import { useState } from "react";
import images from "../../assets/image/image";
import LoginForm from "../formLogin/FormLogin";
import RegisterForm from "../formRegister/FormRegister";
import Modal from "../modal/Modal";
import SpinnerSuccess from "../spinner/SpinnerSuccess";
import "./NavBar.css";

const NavBar = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");

  const openModalLogin = () => {
    setIsModalLoginOpen(true);
    setMessageSuccess("Successful login");
  };

  const closeModalLogin = () => {
    setIsModalLoginOpen(false);
  };

  const openModalRegister = () => {
    setIsModalRegisterOpen(true);
    setMessageSuccess("Successful register");
  };

  const closeModalRegister = () => {
    setIsModalRegisterOpen(false);
  };

  const openModalSuccess = () => {
    setIsModalSuccessOpen(true);
    setTimeout(() => {
      setIsModalSuccessOpen(false);
    }, 1000);
  };

  const closeModalSuccess = () => {
    setIsModalSuccessOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img className="logoNoCountry" src={images.LogoNoCountryTube} />
      </div>
      <div className="navbarBuscar">
        <div className="buscarInputWrapper">
          <div className="lupaWrapper">
            <img className="lupa" src={images.lupa} />
          </div>
          <input type="text" placeholder="Buscar..." />
        </div>
      </div>
      <div className="navbarIngresar">
        <button onClick={openModalLogin} className="buttonNoCountry ingresarButton">
          Ingresar
        </button>
        <Modal isOpen={isModalLoginOpen} closeModal={closeModalLogin}>
          <LoginForm
            closeModalLogin={closeModalLogin}
            openRegisterModal={openModalRegister}
            openSuccessModal={openModalSuccess}
          />
        </Modal>
        <Modal isOpen={isModalRegisterOpen} closeModal={closeModalRegister}>
          <RegisterForm 
          closeModalRegister={closeModalRegister}
          openSuccessModal={openModalSuccess}
          />
        </Modal>
        <Modal isOpen={isModalSuccessOpen} closeModal={closeModalSuccess}>
          <SpinnerSuccess message={messageSuccess}/>
        </Modal>
      </div>
    </nav>
  );
};

export default NavBar;