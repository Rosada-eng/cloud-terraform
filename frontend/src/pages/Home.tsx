import { ActionCards } from "../components/ActionCards";
import { Header } from "../components/Header";
import { Status } from "../components/Status";
import { ModalProvider } from 'styled-react-modal'

export function Home() {

    return (
    <ModalProvider>
        <Header />
        <Status />
        <ActionCards />
    </ModalProvider>
    )
}