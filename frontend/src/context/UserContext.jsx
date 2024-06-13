import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = useState(localStorage.getItem('userName'));
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
    const [accessTokenExpiry, setAccessTokenExpiry] = useState(localStorage.getItem('accessTokenExpiry'));
    const [refreshTokenExpiry, setRefreshTokenExpiry] = useState(localStorage.getItem('refreshTokenExpiry'));

    useEffect(() => {
        localStorage.setItem('userName', userName);
        localStorage.setItem('userId', userId);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessTokenExpiry', accessTokenExpiry);
        localStorage.setItem('refreshTokenExpiry', refreshTokenExpiry);
    }, [userName, userId, accessToken, refreshToken, accessTokenExpiry, refreshTokenExpiry]);

    return (
        <UserContext.Provider value={{
            userName, setUserName,
            userId, setUserId,
            accessToken, setAccessToken,
            refreshToken, setRefreshToken,
            accessTokenExpiry, setAccessTokenExpiry,
            refreshTokenExpiry, setRefreshTokenExpiry
        }}>
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node,
};