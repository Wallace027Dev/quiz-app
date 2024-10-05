import { createGlobalStyle } from "styled-components";
import designSystem from "./design/designSystem";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: ${designSystem.colors.background};
    color: ${designSystem.colors.darkFont};
    font-family: ${designSystem.typography.fontFamily};
    text-align: center;
  }
`;

export default GlobalStyle;
