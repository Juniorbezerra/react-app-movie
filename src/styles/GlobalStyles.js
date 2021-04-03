import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}

  body{
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #E9E9E9;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;