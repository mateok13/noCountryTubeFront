import { Link } from 'react-router-dom';
import useFormLogin from '../../hooks/useFormLogin';
import './FormLogin.css'

function FormLogin() {
    const { mistakes, handleSubmit } = useFormLogin();

    return (
        <div className='containerLogin'>
            <p className='logo'>No Country Tube</p>
            <form className='formLogin' onSubmit={handleSubmit}>
                <input className='inputLogin' type="text" placeholder='User name' id='userName' name='userName' />
                {mistakes.userName && <span className='alertLogin alertUserNameLogin'>{mistakes.userName}</span>}
                <input className='inputLogin' type="password" placeholder='Password' id='password' name='password' />
                {mistakes.password && <span className='alertLogin alertPasswordLogin'>{mistakes.password}</span>}

                <button className='buttonLogin' type='submit'>Iniciar sesión</button>
                <div>
                    <Link to="/register">No tienes cuenta? Regístrate aquí</Link>
                </div>
            </form>
        </div>
    )
}

export default FormLogin