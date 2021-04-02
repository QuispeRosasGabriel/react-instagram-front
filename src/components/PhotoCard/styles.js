import styled from 'styled-components';
import {fadeIn} from '../styles/animations';

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`;

export const Img = styled.img`
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    ${fadeIn()}
`

export const Button = styled.button`
    display: flex; 
    align-items: center;
    justify-content: flex-end;
    padding-top: 8px;  
    background-color: transparent;
    border: none;  
    & svg {
        margin-right: 4px;

    }
`

export const Article = styled.article`
    margin: 1rem 0;
    min-height: 200px;
`;