import { Cpu, PlusCircle } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/default";
import { ChangesFeedback } from "../ChangesFeedback";
import { CardContainer, CardTitle } from "./style";
import Modal from "styled-react-modal";
import { useState } from "react";
import { NewForms } from "../../../Forms/NewInstanceForms";



export function InstanceCard() {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

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
                <NewForms />           
            </StyledModal>
            
            <CardContainer onClick={toggleModal}> 
                <Cpu size={96} color={defaultTheme.orange} weight="thin" />
                <CardTitle> 
                    <p>adicionar </p>
                    <p>Instância </p> 
                </CardTitle>
                <PlusCircle size={32} color={defaultTheme.orange} />
            </CardContainer>

            <ChangesFeedback />

        </div>


    )
}