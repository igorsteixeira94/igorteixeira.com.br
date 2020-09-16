import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --color-link-active: #23be53;
    --color-link-text: #cccccc;
    --color-borders: #2d2e32;
    --color-bcg-main:#1c1c1f;
    --color-bcg-aside:#25262a;



  }
  ::-webkit-scrollbar {
    width: 12px;
    height:6px;
}
  
::-webkit-scrollbar-thumb {
    background: var( --color-bcg-aside); 
    height:6px;
}
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  ul{
    list-style:none;
    cursor:pointer;
  }

  button{
    cursor: pointer;
  }

`;
