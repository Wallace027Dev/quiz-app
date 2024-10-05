import { ThemeProvider } from "styled-components";
import designSystem from "./design/designSystem";
import GlobalStyle from "./globalStyles";
import AppRoutes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={designSystem}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
