import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* I made some changes, but you can find this Custom CSS Reset here https://www.joshwcomeau.com/css/custom-css-reset/ */
   
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Nunito', sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    button {
        cursor: pointer;
    }
    
    #root, #__next {
        isolation: isolate;
    }
`;

export default GlobalStyle;
