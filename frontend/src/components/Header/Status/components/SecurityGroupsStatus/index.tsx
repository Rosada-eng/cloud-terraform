import { SecurityGroupStatusContainer,  } from "./style";
import { Trash } from 'phosphor-react';

export function SecurityGroupStatus() {
    return (
        <SecurityGroupStatusContainer> 
            <p> HTTP allowed </p>
            <Trash size={16} weight="light" />
        </SecurityGroupStatusContainer>

    )
}