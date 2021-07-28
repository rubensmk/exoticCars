import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background: #FFFFFF;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font: 1rem;
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }
    #root {
      --black: #313136;
      --purple:#7B89F4;
      --light-gray:#F8F8FA;
      --gray:#D8D7D7;
      --dark-gray:#656469;
      --white:#FFFFFF;
    }
`;
