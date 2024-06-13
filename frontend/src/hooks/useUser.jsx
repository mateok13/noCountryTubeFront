import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { environment } from "./environment";

const isTokenExpired = (expiry) => {
    const now = new Date().getTime();
    console.log(now>expiry);
    return now > expiry;
};

const useUser = () => {
    const {
        userName, setUserName,
        userId, setUserId,
        accessToken, setAccessToken,
        refreshToken, setRefreshToken,
        accessTokenExpiry, setAccessTokenExpiry,
        refreshTokenExpiry, setRefreshTokenExpiry
    } = useContext(UserContext);

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        const storedUserId = localStorage.getItem('userId');
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');
        const storedAccessTokenExpiry = localStorage.getItem('accessTokenExpiry');
        const storedRefreshTokenExpiry = localStorage.getItem('refreshTokenExpiry');

        if (storedUserName) {
            setUserName(storedUserName);
        }
        if (storedUserId) {
            setUserId(storedUserId);
        }
        if (storedAccessToken) {
            setAccessToken(storedAccessToken);
        }
        if (storedRefreshToken) {
            setRefreshToken(storedRefreshToken);
        }
        if (storedAccessTokenExpiry) {
            setAccessTokenExpiry(parseInt(storedAccessTokenExpiry));
        }
        if (storedRefreshTokenExpiry) {
            setRefreshTokenExpiry(parseInt(storedRefreshTokenExpiry));
        }
    }, [setUserName, setUserId, setAccessToken, setRefreshToken, setAccessTokenExpiry, setRefreshTokenExpiry]);

    useEffect(() => {
        if (accessToken && isTokenExpired(accessTokenExpiry)) {
            if (isTokenExpired(refreshTokenExpiry)) {
                setUserName(null);
                setUserId(null);
                setAccessToken(null);
                setRefreshToken(null);
                setAccessTokenExpiry(null);
                setRefreshTokenExpiry(null);
                localStorage.clear();
            } else {
                const url = environment.url;
                fetch(url + 'auth/refresh', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ refreshToken: refreshToken })
                })
                    .then(response => response.json())
                    .then(data => {
                        setAccessToken(data.accessToken);
                        setAccessTokenExpiry(data.accessTokenExpiry);
                        localStorage.setItem('accessToken', data.accessToken);
                        localStorage.setItem('accessTokenExpiry', data.accessTokenExpiry);
                    })
                    .catch(error => {
                        console.error('Error al renovar el token:', error);
                    });
            }
        }
    }, [accessToken, refreshToken, accessTokenExpiry, refreshTokenExpiry, setUserName, setUserId, setAccessToken, setRefreshToken, setAccessTokenExpiry, setRefreshTokenExpiry ]);

    return {
        userName, setUserName,
        userId, setUserId,
        accessToken, setAccessToken,
        refreshToken, setRefreshToken,
        accessTokenExpiry, setAccessTokenExpiry,
        refreshTokenExpiry, setRefreshTokenExpiry
    };
};

export default useUser;