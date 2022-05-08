import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${normalize()};
    html {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        box-sizing: border-box;
        --color-main-background: #2187E4;
        --color-secondary-background: #2596FE;
        --padding-start: 2rem;
        --color-main-text: #FFF;
        --size-main-text: 1.75rem;
        --size-secondary-text: 1.25rem
    }
    * {
        margin: 0;
    }
    ul {
        list-style: none;
    }
`;
