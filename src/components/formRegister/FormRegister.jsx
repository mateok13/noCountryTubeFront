import { useState } from 'react';
import './FormRegister.css'

function FormRegister() {
    const [date, setDate] = useState('');

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const firstName = form.firstName.value;
        const email = form.email.value;
        const userName = form.userName.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log('First Name:', firstName);
        console.log('Email:', email);
        console.log('User:', userName);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Date:', date);
    }

    return (
        <div className='containerRegister'>
            <p className='logo'>No Country Tube</p>
            <form className='formRegister' onSubmit={handleSubmit}>
                <input className='inputRegister' type="text" placeholder='First name' id='firstName' name='firstName' required />
                <input className='inputRegister' type="email" placeholder='Email' id='email' name='email' required />
                <input className='inputRegister' type="text" placeholder='User name' id='userName' name='userName' required />
                <input className='inputRegister' type="password" placeholder='Password' id='password' name='password' required />
                <input className='inputRegister' type="password" placeholder='Confirm password' id='confirmPassword' name='confirmPassword' required />
                <input className='inputRegister' type="date" id='birthDay' name='birthDay' value={date} onChange={handleDateChange} required />

                <button className='buttonRegister' type='submit'>Regístrate</button>
            </form>
        </div>
    )
}

export default FormRegister