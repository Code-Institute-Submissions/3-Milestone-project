import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(#dcf4fc, #076585) ;

    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  :root {
    background: linear-gradient(#076585, #49a5c4) ;
  }
`;

/**
 *  Global styles in the app export to App.tsx
 *
 */
