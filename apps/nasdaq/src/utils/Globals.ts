import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        box-sizing: border-box;
        --color-main: #FFF;
        --color-background: #249cff;
        --color-secondary-background: #1792fb;
        --padding-start: 2rem;
        --color-main-text: #FFF;
        --size-main-text: 1.5rem;
        --size-secondary-text: 1rem;
        --input-border-radius: 4px;
    }
    * {
        margin: 0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
`;
