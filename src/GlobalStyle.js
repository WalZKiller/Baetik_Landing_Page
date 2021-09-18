import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primaryPink: #ee447d;
        --medPink: #f5a8c5;
        --lightPink: #f9d7dd;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
    }
`;