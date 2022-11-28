import { ThemeProvider } from "styled-components";
import { ActionCards } from "./components/ActionCards";
import { Header } from "./components/Header";
import { Status } from "./components/Status";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ModalProvider } from 'styled-react-modal'
import { AppProvider } from "./context/Context";



function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
          <AppProvider>
            <ModalProvider>
              <Header />
              <Status />
              <ActionCards />
              
            </ModalProvider>
          </AppProvider>
    </ThemeProvider>
  )
}

export default App
