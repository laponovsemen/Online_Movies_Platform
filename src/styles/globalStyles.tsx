import { createGlobalStyle } from 'styled-components';
import {Theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${Theme.colors.primaryBackGround};
    color:${Theme.colors.textColor};
    font-family: Poppins, sans-serif;
  }
  .navbar ul a {
    color: rgb(34 197 94);
  }
`;

