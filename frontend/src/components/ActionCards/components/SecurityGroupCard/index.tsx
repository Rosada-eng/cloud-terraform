import { Keyhole, PlusCircle } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/default";
import { CardContainer, CardTitle } from "./style";

export function SecurityGroupCard() {
    return (
        <CardContainer> 
            <Keyhole size={96} color={defaultTheme["blue-button"]} weight="thin" />
            <CardTitle> 
                <p>adicionar</p>
                <p>Grupo de Segurança</p> 
            </CardTitle>
            <PlusCircle size={32} color={defaultTheme["blue-button"]} />
        </CardContainer>


    )
}