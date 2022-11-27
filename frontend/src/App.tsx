import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Status } from "./components/Header/Status";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Header />
        <Status />
    </ThemeProvider>
  )
}

export default App
