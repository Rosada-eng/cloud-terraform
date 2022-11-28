import { IAMUserStatusContainer,  } from "./style";
import { Trash } from 'phosphor-react';
import { useContext } from "react";
import { AppContext } from "../../../../context/Context";

interface IInstanceStatus {userName: string }

export function IAMUserStatus({ userName }: IInstanceStatus) {
    const {IAMUsers, setIAMUsers} = useContext(AppContext);

    function handleRemoveIAMUser(event) {
        const filteredIAMUsers = IAMUsers.filter((i) => i !== userName);
        setIAMUsers(filteredIAMUsers);
    }
    
    return (
        <IAMUserStatusContainer> 
            <p> {userName} </p>
            <Trash className="remove" size={16} weight="light"  onClick={handleRemoveIAMUser}/>
        </IAMUserStatusContainer>

    )
}