import { IAMUserStatusContainer,  } from "./style";
import { Trash } from 'phosphor-react';

export function IAMUserStatus() {
    return (
        <IAMUserStatusContainer> 
            <p> guilherme.rosada </p>
            <Trash size={16} weight="light" />
        </IAMUserStatusContainer>

    )
}