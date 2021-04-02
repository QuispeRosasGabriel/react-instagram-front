import styled from 'styled-components';


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
&.focus {
    border: none;
    outline: none;
}
`
