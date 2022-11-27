import { Minus, Plus } from "phosphor-react";
import { defaultTheme } from "../../../../../../styles/themes/default";
import { ChangeRowContainer } from "./style";

interface ChangeStatusRowProps {
    changeStatus: 'add' | 'remove';
    changeName: string
}

export function ChangeStatusRow({ changeStatus, changeName}:ChangeStatusRowProps) {
    return (
        <ChangeRowContainer>
            {
            changeStatus === 'add' ?
                <Plus size={12} color={defaultTheme["green-button"]} weight="bold" />
            :
                <Minus size={12} color={defaultTheme["red-icon"]} weight="bold" />
            }

            <p>{changeName}</p>

        </ChangeRowContainer>

    )
}