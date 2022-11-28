import { PlusCircle, User } from "phosphor-react";
import { useContext, useState } from "react";
import { defaultTheme } from "../../../../styles/themes/default";
import { NewUserForms } from "../../../Forms/NewUserForms";
import { CardContainer, CardTitle } from "./style";
import Modal from "styled-react-modal";
import { AppContext } from "../../../../context/Context";

export function UsersIAMCard() {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const {changedIAMUsers} = useContext(AppContext);

    function toggleModal(e) {
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    function afterOpen() {
        setTimeout(() => {
        setOpacity(1);
        }, 100);
    }

    function beforeClose() {
        return new Promise((resolve) => {
        setOpacity(0);
        setTimeout(resolve, 300);
        });
    }

    const StyledModal = Modal.styled`
        width: 720px;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        opacity: ${(props) => props.opacity};
        transition : all 0.3s ease-in-out;`;

    

    return (
        <div>
            <StyledModal
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
            >
                <NewUserForms />           
            </StyledModal>
            
            <CardContainer onClick={toggleModal}> 
                <User size={76} color={defaultTheme["green-button"]} weight="thin" />
                <CardTitle> 
                    <p> adicionar </p> 
                    <p> Usuário IAM </p>
                </CardTitle>
                <PlusCircle size={24} color={defaultTheme["green-button"]} />
            </CardContainer>
    

        </div>


    )
}