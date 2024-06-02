import { useState } from 'react';
import { environment } from '../hooks/environment'

const useFormRegister = (onSuccess) => {
    const [mistakes, setMistakes] = useState({});
    const [sendData, setSendData] = useState(false);

    const [dateDatePicker, setDateDatePicker] = useState(null);
    const [date, setDate] = useState('');

    const regexTextOnly = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+(\s[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+)*$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexUserName = /^[A-Za-z0-9]+$/;
    // const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    const validateFields = (form) => {
        let mistakes = {};

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
        } else if (!regexUserName.test(form.password)) {
            mistakes.password = 'The password can only contain letters and numbers';
        }

        if (!form.confirmPassword.trim()) {
            mistakes.confirmPassword = 'The confirm password field must not be empty, confirm your password';
        } else if (form.password !== form.confirmPassword) {
            mistakes.confirmPassword = 'The passwords do not match';
        }

        if (!form.birthDate.trim()) {
            mistakes.birthDate = 'The birthdate field must not be empty, enter your birthdate';
        } else if (!regexFecha.test(form.birthDate)) {
            mistakes.birthDate = 'The birthdate has an invalid format';
        }

        setMistakes(mistakes);
        return mistakes;
    };

    const handleDateChange = (date) => {
        setDateDatePicker(date);
        if (date) {
            const formatted = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
            setDate(formatted);
        } else {
            setDate('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);

        const formData = {};
        form.forEach((value, key) => {
            formData[key] = value;
        });

        const mistake = validateFields(formData);
        setMistakes(mistake);

        if (Object.keys(mistake).length === 0) {
            const url = environment.url + 'endpointRegister';
            setSendData(true);
            fetch(url, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setSendData(false);
                    if (onSuccess) {
                        onSuccess();
                    }
                })
                .catch(error => {
                    console.log(error);
                    setSendData(false);
                    alert("No se pudo realizar el registro");
                });
        }
    };

    return {
        mistakes,
        handleSubmit,
        handleDateChange,
        dateDatePicker,
        date,
        setDate,
        sendData
    };
};

export default useFormRegister;