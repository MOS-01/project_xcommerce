import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    border:0;
    box-sizing:border-box;
    list-style: none;
    font-family: "Inter", sans-serif;
  }

  button{
    cursor: pointer;
  }

  button:disabled{
    cursor: not-allowed;
  }

  body{
    max-width: 100%;
  }

  :root{
    --color-primary-1: #17223E;
    --color-primary-2: #235EE7;
    --color-primary-3: #061237;

    --color-grey-1:#6B7183;
    --color-grey-2:#99A0B0;
    --color-grey-3:#F3F5F9;
    --color-grey-4:#FFFFFF;

    --color-button:#D32811;
    --color-icon:#9765D8;
    
  }
`

