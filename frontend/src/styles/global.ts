import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;


        :focus {
            outline: 0;
            box-shadow: 0 0 0 1px ${props => props.theme['yellow-apply-button']};
        }
    }

    body {

        background-color: ${props => props.theme['default-background']};
        color: ${props => props.theme['default-font-color']};
        -webkit-font-smoothing: antialiased;

    }

    body, input, textarea, button {
        font: 300 1rem 'Inter', sans-serif;
    }

`