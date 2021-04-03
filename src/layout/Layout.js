import React from 'react'
import { Logo } from '../components/Logo'
import { Navbar } from '../components/Navbar'
import { GlobalStyle } from '../components/styles/GlobalStyles'

export const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle />
            <Logo />
                {children}
            <Navbar />
        </>
    )
}
