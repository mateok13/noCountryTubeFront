import PropTypes from 'prop-types'
import useFormLogin from '../../hooks/useFormLogin';
import images from '../../assets/image/image'
import './FormLogin.css';

function FormLogin({ closeModalLogin, openRegisterModal }) {
    const { mistakes, handleSubmit } = useFormLogin();

    const openModalRegister = () => {
        console.log('Opening modal register');
        closeModalLogin();
        openRegisterModal();
    };

    return (
        <div className='containerLogin'>
            <img className='logoNoCountry' src={images.LogoNoCountryTube} />
            <form className='formLogin' onSubmit={handleSubmit}>
                <div className='inputContentLogin'>
                    <input className='inputLogin' type="text" placeholder='User name' id='userName' name='userName' />
                    {mistakes.userName && <span className='alertLogin alertUserNameLogin'>{mistakes.userName}</span>}
                </div>
                <div className='inputContentLogin'>
                    <input className='inputLogin' type="password" placeholder='Password' id='password' name='password' />
                    {mistakes.password && <span className='alertLogin alertPasswordLogin'>{mistakes.password}</span>}
                </div>
                <button className='buttonLogin' type='submit'>Iniciar sesión</button>
                <div className='hyperLinkContainer'>
                    <p>No tienes cuenta? </p>
                    <a className='hyperLink' href="#" onClick={openModalRegister}>
                        Regístrate aquí
                    </a>
                </div>
            </form>
        </div>
    );
}

FormLogin.propTypes = {
    closeModalLogin: PropTypes.func.isRequired,
    openRegisterModal: PropTypes.func.isRequired,
};

export default FormLogin;