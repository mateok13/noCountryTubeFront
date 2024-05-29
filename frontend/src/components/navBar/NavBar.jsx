import { useState } from "react";
import images from "../../assets/image/image";
import LoginForm from "../formLogin/FormLogin";
import RegisterForm from "../formRegister/FormRegister";
import Modal from "../modal/Modal";
import "./NavBar.css";

const NavBar = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);

  const openModalLogin = () => {
    console.log("Opening modal login");
    setIsModalLoginOpen(true);
  };

  const closeModalLogin = () => {
    console.log("Closing modal login");
    setIsModalLoginOpen(false);
  };

  const openModalRegister = () => {
    console.log("Opening modal register");
    setIsModalRegisterOpen(true);
  };

  const closeModalRegister = () => {
    console.log("Closing modal register");
    setIsModalRegisterOpen(false);
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
        <button onClick={openModalLogin} className="ingresarButton">
          Ingresar
        </button>
        <Modal isOpen={isModalLoginOpen} closeModal={closeModalLogin}>
          <LoginForm
            closeModalLogin={closeModalLogin}
            openRegisterModal={openModalRegister}
          />
        </Modal>
        <Modal isOpen={isModalRegisterOpen} closeModal={closeModalRegister}>
          <RegisterForm />
        </Modal>
      </div>
    </nav>
  );
};

export default NavBar;
