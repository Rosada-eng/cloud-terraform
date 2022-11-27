import { IAMUserStatusContainer,  } from "./style";
import { Trash } from 'phosphor-react';

interface IInstanceStatus { userName: string }

export function IAMUserStatus({ userName }: IInstanceStatus) {
    return (
        <IAMUserStatusContainer> 
            <p> {userName} </p>
            <Trash size={16} weight="light" />
        </IAMUserStatusContainer>

    )
}