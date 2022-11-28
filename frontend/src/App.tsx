import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { AppProvider } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Instances } from "./pages/Instances";
import { SecurityGroups } from "./pages/SecurityGroups";
import { IAMUsers } from "./pages/IAMUsers";



function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
          <AppProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Home/>} path="/" />
                <Route element={<Instances/>} path="/instances" />
                <Route element={<SecurityGroups/>} path="/security_groups" />
                <Route element={<IAMUsers/>} path="/users" />

              </Routes>
              
            
            </BrowserRouter>
          </AppProvider>
    </ThemeProvider>
  )
}

export default App
