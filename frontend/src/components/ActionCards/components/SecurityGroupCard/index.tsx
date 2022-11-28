import { Keyhole, PlusCircle } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/default";
import { NewSecurityGroupForms } from "../../../Forms/NewSecurityGroupForms";
import { CardContainer, CardTitle } from "./style";
import Modal from "styled-react-modal";
import { useContext, useState } from "react";
import { GressForms } from "../../../Forms/NewSecurityGroupForms/components/GressForms";
import { AppContext } from "../../../../context/Context";

export function SecurityGroupCard() {

    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const {changedSecurityGroups} = useContext(AppContext);

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
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        opacity: ${(props) => props.opacity};
        transition : all 0.3s ease-in-out;
        overflow-y: scroll;
        padding: 1rem;`;

    

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
                <NewSecurityGroupForms />
            </StyledModal>


            <CardContainer onClick={toggleModal}> 
                <Keyhole size={76} color={defaultTheme["blue-button"]} weight="thin" />
                <CardTitle> 
                    <p>adicionar</p>
                    <p>Grupo de Segurança</p> 
                </CardTitle>
                <PlusCircle size={24} color={defaultTheme["blue-button"]} />
            </CardContainer>

        </div>


    )
}