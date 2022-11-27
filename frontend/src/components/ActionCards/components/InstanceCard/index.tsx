import { Cpu, PlusCircle } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/default";
import { CardContainer, CardTitle } from "./style";

export function InstanceCard() {
    return (
        <CardContainer> 
            <Cpu size={96} color={defaultTheme.orange} weight="thin" />
            <CardTitle> 
                <p>adicionar </p>
                <p>Instância </p> 
            </CardTitle>
            <PlusCircle size={32} color={defaultTheme.orange} />
        </CardContainer>


    )
}