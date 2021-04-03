import React, { createContext, useState } from 'react';
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const value = {
        isAuth,
        activateAuth: () => {
            setIsAuth(true)
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}