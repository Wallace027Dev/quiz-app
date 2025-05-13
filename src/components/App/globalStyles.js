import { createGlobalStyle } from "styled-components";
import designSystem from "../../design/designSystem";

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
    text-decoration: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  textarea,
  button,
  fieldset {
    all: unset;
    box-sizing: border-box;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
    background-color: #fff;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
