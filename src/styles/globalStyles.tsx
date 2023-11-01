import { createGlobalStyle } from "styled-components";
import Rubik from "../assets/fonts/Rubik/Rubik-Medium.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:'Rubik' ;
        src: url(${Rubik}) format('tff');
    }

    html,body {
        display: flex;
        width:100vw;
        height:100%;
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
