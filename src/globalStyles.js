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

  button {
    cursor: pointer;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.tertiary};
    padding: 0.5rem 1rem;
    font-weight: 600;
    font-family: inherit;
    font-size: 1rem;
    min-width: 16rem;
    text-align: center;
    text-transform: uppercase;
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
