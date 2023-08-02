import { createGlobalStyle } from "styled-components";
import Rubik from "../fonts/Rubik/Rubik-Medium.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:'Rubik' ;
        src: url(${Rubik}) format('tff');
    }

    body {
        width:100vw;
        height:100vh;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
        background:${({ theme }) => theme.color.background};
    } 

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #555;
        border-radius: 10px;
    }
`;

export default GlobalStyle;
