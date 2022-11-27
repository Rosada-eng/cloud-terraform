import { PlusCircle, User } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/default";
import { CardContainer, CardTitle } from "./style";

export function UsersIAMCard() {
    return (
        <CardContainer> 
            <User size={96} color={defaultTheme["green-button"]} weight="thin" />
            <CardTitle> 
                <p> adicionar </p> 
                <p> Usuário IAM </p>
            </CardTitle>
            <PlusCircle size={32} color={defaultTheme["green-button"]} />
        </CardContainer>


    )
}