import React, { createContext, useState } from 'react';
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => sessionStorage.getItem('token'));

    const value = {
        isAuth,
        activateAuth: (token) => {
            sessionStorage.setItem('token', token);
            setIsAuth(true);
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}