import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    
}

body{
    background:#ffffff;
    height: 100%;
}

button{
    font-weight:bold;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border:1px solid #000000;
    outline: 0;
    background:transparent;
    color:#000000;
    transition:all 0.5s ease;
    &:hover{
        background-color: #ff960c;
        color: #ffffff;
    }
}

span{
            color: #f38120;
        }
`;

export default GlobalStyle;
