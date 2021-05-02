import React from 'react'
import Helmet from 'react-helmet';
import { Subtitle, Title, Wrapper } from "./styles";

const Layout = ({ children, title, subtitle }) => {
    return (
        <>
            <Helmet>
                {title && <title>{title} | Petgram</title>}
                {subtitle && <meta name='description' content={subtitle} />}
            </Helmet>
            <Wrapper>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {children}
            </Wrapper>
        </>
    )
}

export default Layout
