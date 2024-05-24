import { useState, forwardRef } from 'react';
import DatePicker from "react-datepicker";
import InputMask from 'react-input-mask';
import useFormRegister from '../../hooks/useFormRegister';
import images from '../../assets/image/image'
import "react-datepicker/dist/react-datepicker.css";
import './FormRegister.css';

function FormRegister() {
    const [dateDatePicker, setDateDatePicker] = useState(null);
    const [date, setDate] = useState('');
    const { mistakes, handleSubmit } = useFormRegister();

    // eslint-disable-next-line react/prop-types
    const ButtonDate = forwardRef(function CustomInput({ onClick }, ref) {
        return (
            <button className='buttonPicker' type="button" onClick={onClick} ref={ref}>📅</button>
        );
    });

    const handleDateChange = (date) => {
        setDateDatePicker(date);
        if (date) {
            const formatted = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
            setDate(formatted);
        } else {
            setDate('');
        }
    };

    return (
        <div className='containerRegister'>
            <img className='logoNoCountry' src={images.LogoNoCountryTube} />
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
                <div className="dateInputContainer">
                    <InputMask
                        mask="99/99/9999"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    >
                        {(inputProps) => <input {...inputProps} className="inputRegister" placeholder="Birthdate (dd/mm/yyyy)" name="birthDate" />}
                    </InputMask>

                    <DatePicker
                        selected={dateDatePicker}
                        onChange={handleDateChange}
                        customInput={<ButtonDate />}
                    />
                </div>
                {mistakes.birthDate && <span className='alertRegister alertBirthDateRegister'>{mistakes.birthDate}</span>}

                <button className='buttonRegister' type='submit'>Regístrate</button>
            </form>
        </div>
    );
}

export default FormRegister;