import { ThemeProvider } from "styled-components";
import { ActionCards } from "./components/ActionCards";
import { InstanceCard } from "./components/ActionCards/components/InstanceCard";
import { ChangesFeedback } from "./components/ActionCards/components/ChangesFeedback";
import { Header } from "./components/Header";
import { Status } from "./components/Status";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Header />
        <Status />
        <ActionCards />
    </ThemeProvider>
  )
}

export default App
