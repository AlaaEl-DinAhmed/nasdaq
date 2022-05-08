import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${normalize()};
    html {
        font-size: 16px;
        box-sizing: border-box;
        --color-main-background: #2187E4;
        --color-secondary-background: #2596FE;
        --padding-start: 2rem
    }
`;
