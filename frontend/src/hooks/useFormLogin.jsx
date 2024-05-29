import { useState } from 'react';
import { environment } from '../hooks/environment'

const useFormRegister = () => {
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

        if (Object.keys(mistakes).length === 0) {
            const url = environment.url;

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
                })
        }
    }

    return {
        mistakes,
        handleSubmit
    };
};

export default useFormRegister;