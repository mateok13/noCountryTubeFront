import { useState } from 'react';
import './FormRegister.css';

function FormRegister() {
    const [date, setDate] = useState('');

    const [mistakes, setMistakes] = useState({});

    const validateFields = (form) => {
        let mistakes = {};
        let regexTextOnly = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+(\s[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+)*$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexUserName = /^[A-Za-z0-9]+$/;
        let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // let regexFecha = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

        if (!form.firstName.trim()) {
            mistakes.firstName = 'The first name field must not be empty, enter your first name';
        } else if (!regexTextOnly.test(form.firstName)) {
            mistakes.firstName = 'The first name can only contain letters and spaces (a space between each word)';
        }

        if (!form.email.trim()) {
            mistakes.email = 'The email field must not be empty, enter your email';
          } else if (!regexEmail.test(form.email)) {
            mistakes.email = 'The email has an invalid format';
          }

        if (!form.userName.trim()) {
            mistakes.userName = 'The user name field must not be empty, enter your user name';
        } else if (!regexUserName.test(form.userName)) {
            mistakes.userName = 'The user name can only contain letters and numbers';
        }

        if (!form.password.trim()) {
            mistakes.password = 'The password field must not be empty, enter your password';
        } else if(!regexPassword.test(form.password)){
            mistakes.password = 'The password has an invalid format';
        }

        if (!form.confirmPassword.trim()) {
            mistakes.confirmPassword = 'The confirm password field must not be empty, confirm your password';
        } else if (form.password !== form.confirmPassword) {
            mistakes.confirmPassword = 'The passwords do not match';
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
    };

    return (
        <div className='containerRegister'>
            <p className='logo'>No Country Tube</p>
            <form className='formRegister' onSubmit={handleSubmit}>
                <input className='inputRegister' type="text" placeholder='First name' id='firstName' name='firstName' />
                {mistakes.firstName && <span className='alertRegister alertFirstNameRegister'>{mistakes.firstName}</span>}
                <input className='inputRegister' type="email" placeholder='Email' id='email' name='email' />
                {mistakes.email && <span className='alertRegister alertEmailRegister'>{mistakes.email}</span>}
                <input className='inputRegister' type="text" placeholder='User name' id='userName' name='userName' />
                {mistakes.userName && <span className='alertRegister alertUsernameRegister'>{mistakes.userName}</span>}
                
                <div className='tooltipPasswordContainer'>
                    <input className='inputRegister' type="password" placeholder='Password' id='password' name='password' />
                    {mistakes.password && <span className='alertRegister alertPasswordRegister'>{mistakes.password}</span>}
                    <span className="tooltipPassword">
                        <ul className='requirementsPassword'>
                            <li>Al menos una letra minúscula.</li>
                            <li>Al menos una letra mayúscula.</li>
                            <li>Al menos un dígito.</li>
                            <li>Al menos un carácter especial (por ejemplo, @, #, $, %, &, etc.).</li>
                            <li>Una longitud mínima de 8 caracteres.</li>
                        </ul>
                    </span>
                </div>
                
                <input className='inputRegister' type="password" placeholder='Confirm password' id='confirmPassword' name='confirmPassword' />
                {mistakes.confirmPassword && <span className='alertRegister alertConfirmPasswordRegister'>{mistakes.confirmPassword}</span>}
                <input className='inputRegister' type="date" id='birthDay' name='birthDay' value={date} onChange={(event) => setDate(event.target.value)} />
                {/* {mistakes.birthDay && <span >{mistakes.birthDay}</span>} */}

                <button className='buttonRegister' type='submit'>Regístrate</button>
            </form>
        </div>
    );
}

export default FormRegister;