import { useState } from 'react';
import { environment } from '../hooks/environment';
import useUser from './useUser';

const useFormLogin = (onSuccess) => {
    const [mistakes, setMistakes] = useState({});
    const [sendData, setSendData] = useState(false);
    const { setUser } = useUser();

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
            const url = environment.url;
            setSendData(true);
            fetch(url + 'endpointLogin', {
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
                    setUser(data);
                    if (onSuccess) {
                        onSuccess();
                    }
                })
                .catch(error => {
                    console.log(error);
                    setSendData(false);
                    alert("No se pudo iniciar la sesión");
                });
        }
    };

    return {
        mistakes,
        handleSubmit,
        sendData
    };
};

export default useFormLogin;