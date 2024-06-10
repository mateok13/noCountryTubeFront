import PropTypes from 'prop-types'
import { forwardRef } from 'react';
import DatePicker from "react-datepicker";
import InputMask from 'react-input-mask';
import useFormRegister from '../../hooks/useFormRegister';
import images from '../../assets/image/image'
import "react-datepicker/dist/react-datepicker.css";
import './FormRegister.css';

function FormRegister({ openSuccessModal, closeModalRegister }) {
    const { mistakes, handleSubmit, handleDateChange, dateDatePicker, date, setDate, sendData } = useFormRegister(() => {
        closeModalRegister();
        openSuccessModal();
    });

    const ButtonDate = forwardRef(function CustomInput({ onClick }, ref) {
        return (
            <button className='buttonNoCountry buttonPicker' type="button" onClick={onClick} ref={ref}>📅</button>
        );
    });

    return (
        <div className='containerRegister'>
            <img className='logoNoCountry' src={images.LogoNoCountryTube} />
            <form className='formNoCountry' onSubmit={handleSubmit}>
                <div className='inputContentRegister'>
                    <input className='inputNoCountry' type="text" placeholder='First name' id='firstName' name='firstName' />
                    {mistakes.firstName && <span className='alertRegister'>{mistakes.firstName}</span>}
                </div>
                <div className='inputContentRegister'>
                    <input className='inputNoCountry' type="text" placeholder='Last name' id='lastName' name='lastName' />
                    {mistakes.lastName && <span className='alertRegister'>{mistakes.lastName}</span>}
                </div>
                <div className='inputContentRegister'>
                    <input className='inputNoCountry' type="email" placeholder='Email' id='email' name='email' />
                    {mistakes.email && <span className='alertRegister'>{mistakes.email}</span>}
                </div>
                <div className='inputContentRegister'>
                    <input className='inputNoCountry' type="text" placeholder='User name' id='userName' name='userName' />
                    {mistakes.userName && <span className='alertRegister'>{mistakes.userName}</span>}
                </div>
                <div className='inputContentRegister'>
                    <input className='inputNoCountry' type="password" placeholder='Password' id='password' name='password' />
                    {mistakes.password && <span className='alertRegister'>{mistakes.password}</span>}
                </div>
                <div className='inputContentRegister'>
                    <input className='inputNoCountry' type="password" placeholder='Confirm password' id='confirmPassword' name='confirmPassword' />
                    {mistakes.confirmPassword && <span className='alertRegister'>{mistakes.confirmPassword}</span>}
                </div>
                <div className='inputContentRegister'>
                    <input className='inputNoCountry' type="number" placeholder='Phone' id='phone' name='phone' />
                    {mistakes.phone && <span className='alertRegister'>{mistakes.phone}</span>}
                </div>
                <div className='inputContentRegister'>
                    <div className="dateInputContainer">
                        <InputMask
                            mask="99/99/9999"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        >
                            {(inputProps) => <input {...inputProps} className="inputNoCountry" placeholder="Birthdate (dd/mm/yyyy)" name="birthDate" />}
                        </InputMask>

                        <DatePicker
                            selected={dateDatePicker}
                            onChange={handleDateChange}
                            customInput={<ButtonDate />}
                            popperPlacement="bottom-start"
                            popperClassName="customDatePickerPopper"
                        />
                    </div>
                    {mistakes.birthDate && <span className='alertRegister'>{mistakes.birthDate}</span>}
                </div>

                <button className='buttonNoCountry' type='submit' disabled={sendData}>{sendData ? "Registrandote" : "Regístrate"}</button>
            </form>
        </div>
    );
}

FormRegister.propTypes = {
    onClick: PropTypes.func,
    closeModalRegister: PropTypes.func.isRequired,
    openSuccessModal: PropTypes.func.isRequired,
};

export default FormRegister;