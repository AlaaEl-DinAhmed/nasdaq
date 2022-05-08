import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${normalize()};
    html {
        font-size: 16px;
        box-sizing: border-box;
    }
`;