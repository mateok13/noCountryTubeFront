import { useState, useRef, useEffect } from "react";
import images from "../../assets/image/image";
import LoginForm from "../formLogin/FormLogin";
import RegisterForm from "../formRegister/FormRegister";
import Modal from "../modal/Modal";
import SpinnerSuccess from "../spinner/SpinnerSuccess";
import useUser from '../../hooks/useUser';
import "./NavBar.css";

const NavBar = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");

  const { accessToken } = useUser();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navBar">
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
        {
          accessToken === "null" ? (
            <button onClick={openModalLogin} className="buttonNoCountry ingresarButton">
              Ingresar
            </button>
          ) : (
            <div className="iconsNavBar">
              <i className="bi bi-camera-video iconsNavbar"></i>
              <i className="bi bi-bell iconsNavbar"></i>
              <div className="dropdown" ref={dropdownRef}>
                <i className={`bi bi-person-fill iconsNavbar ${showDropdown ? 'iconActive' : ''}`} onClick={toggleDropdown}></i>
                {showDropdown && (
                  <div className="dropdown-content">
                    <button className="buttonProfile" href="#ver-perfil"><i className="bi bi-person-square"></i> Profile</button>
                    <button className="buttonProfile" onClick={logOut}><i className="bi bi-box-arrow-right"></i> Log out</button>
                  </div>
                )}
              </div>
            </div>
          )
        }
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
          <SpinnerSuccess message={messageSuccess} />
        </Modal>
      </div>
    </nav>
  );
};

export default NavBar;