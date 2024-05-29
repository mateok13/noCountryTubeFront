import PropTypes from 'prop-types'
import { forwardRef } from 'react';
import DatePicker from "react-datepicker";
import InputMask from 'react-input-mask';
import useFormRegister from '../../hooks/useFormRegister';
import images from '../../assets/image/image'
import "react-datepicker/dist/react-datepicker.css";
import './FormRegister.css';

function FormRegister() {
    const { mistakes, handleSubmit, handleDateChange, dateDatePicker, date, setDate } = useFormRegister();

    const ButtonDate = forwardRef(function CustomInput({ onClick }, ref) {
        return (
            <button className='buttonPicker' type="button" onClick={onClick} ref={ref}>📅</button>
        );
    });

    return (
        <div className='containerRegister'>
            <img className='logoNoCountry' src={images.LogoNoCountryTube} />
            <form className='formRegister' onSubmit={handleSubmit}>
                <div className='inputContentRegister'>
                    <input className='inputRegister' type="text" placeholder='First name' id='firstName' name='firstName' />
                    {mistakes.firstName && <span className='alertRegister alertFirstNameRegister'>{mistakes.firstName}</span>}
                </div>
                <div className='inputContentRegister'>
                    <input className='inputRegister' type="email" placeholder='Email' id='email' name='email' />
                    {mistakes.email && <span className='alertRegister alertEmailRegister'>{mistakes.email}</span>}
                </div>
                <div className='inputContentRegister'>
                    <input className='inputRegister' type="text" placeholder='User name' id='userName' name='userName' />
                    {mistakes.userName && <span className='alertRegister alertUsernameRegister'>{mistakes.userName}</span>}
                </div>
                <div className='inputContentRegister'>
                    <input className='inputRegister' type="password" placeholder='Password' id='password' name='password' />
                    {mistakes.password && <span className='alertRegister alertPasswordRegister'>{mistakes.password}</span>}
                </div>
                {/* <div className='tooltipPasswordContainer'>
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
                </div> */}

                <div className='inputContentRegister'>
                    <input className='inputRegister' type="password" placeholder='Confirm password' id='confirmPassword' name='confirmPassword' />
                    {mistakes.confirmPassword && <span className='alertRegister alertConfirmPasswordRegister'>{mistakes.confirmPassword}</span>}
                </div>
                <div className='inputContentRegister'>
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
                            popperPlacement="bottom-start"
                            popperClassName="customDatePickerPopper"
                        />
                    </div>
                    {mistakes.birthDate && <span className='alertRegister alertBirthDateRegister'>{mistakes.birthDate}</span>}
                </div>

                <button className='buttonRegister' type='submit'>Regístrate</button>
            </form>
        </div>
    );
}

FormRegister.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default FormRegister;