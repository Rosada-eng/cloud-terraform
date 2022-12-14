import { Cpu, PlusCircle } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/default";
import { CardContainer, CardTitle } from "./style";
import Modal from "styled-react-modal";
import { useContext, useState } from "react";
import { NewForms } from "../../../Forms/NewInstanceForms";
import { AppContext } from "../../../../context/Context";



export function InstanceCard() {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const {changedInstances} = useContext(AppContext);

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
        overflow-y: scroll;`;

    

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
                <Cpu size={76} color={defaultTheme.orange} weight="thin" />
                <CardTitle> 
                    <p>adicionar </p>
                    <p>Instância </p> 
                </CardTitle>
                <PlusCircle size={24} color={defaultTheme.orange} />
            </CardContainer>


        </div>


    )
}