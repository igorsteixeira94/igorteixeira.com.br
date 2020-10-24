import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
 
  :root{
    --color-link-active: #23be53;
    --color-link-text: #fff;
    --color-borders: #303e52;
    --color-bcg-main:#202833;
    --color-bcg-aside:#293342;

  }
  ::-webkit-scrollbar {
    width: 12px;
    height:8px;
}
  
::-webkit-scrollbar-thumb {
    background: var( --color-bcg-aside); 
    height:8px;
}
  pre{
    ::-webkit-scrollbar-thumb {
    background: #e3e3e3; 
    }
  }
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html,body,#___gatsby{
    font-family: 'Montserrat', sans-serif;
  }

  body{
    -webkit-font-smoothing:antialiased;

  }

  ul{
    list-style:none;
    cursor:pointer;
  }

  button{
    cursor: pointer;
  }

`;
