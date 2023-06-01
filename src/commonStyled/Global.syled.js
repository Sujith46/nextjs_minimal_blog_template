import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-family: ManropeRegular;
  font-size: 16px;
  line-height: 24px;
  /* background-color: whitesmoke; */
}

a {
  color: inherit;
  text-decoration: none;
  
}
`;
