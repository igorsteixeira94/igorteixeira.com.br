import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
 
  :root{
    --color-link-active: #23be53;
    --color-link-text: #fff;
    --color-borders: #2d2e32;
    --color-bcg-main:#1c1c1f;
    --color-bcg-aside:#25262a;



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
    font-family: 'Noto Sans JP', sans-serif;
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
