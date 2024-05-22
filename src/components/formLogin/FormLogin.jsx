import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormLogin.css'

function FormLogin() {
    const [mistakes, setMistakes] = useState({});

    const validateFields = (form) => {
        let mistakes = {};
        let regexUserName = /^[A-Za-z0-9]+$/;

        if (!form.userName.trim()) {
            mistakes.userName = 'The user name field must not be empty, enter your user name';
        } else if (!regexUserName.test(form.userName)) {
            mistakes.userName = 'The user name can only contain letters and numbers';
        }

        if (!form.password.trim()) {
            mistakes.password = 'The password field must not be empty, enter your password';
        }

        return mistakes;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);

        const formData = {};
        form.forEach((value, key) => {
            formData[key] = value;
        });

        const mistake = validateFields(formData);
        setMistakes(mistake);
    }

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