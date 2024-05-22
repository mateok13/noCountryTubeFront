import { Link } from 'react-router-dom';
import './FormLogin.css'

function FormLogin() {

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const userName = form.userName.value;
        const password = form.password.value;

        console.log('User:', userName);
        console.log('Password:', password);
    }

    return (
        <div className='containerLogin'>
            <p className='logo'>No Country Tube</p>
            <form className='formLogin' onSubmit={handleSubmit}>
                <input className='inputLogin' type="text" placeholder='User name' id='userName' name='userName' required />
                <input className='inputLogin' type="password" placeholder='Password' id='password' name='password' required />

                <button className='buttonLogin' type='submit'>Iniciar sesión</button>
                <div>
                    <Link to="/register">No tienes cuenta? Regístrate aquí</Link>
                </div>
            </form>
        </div>
    )
}

export default FormLogin