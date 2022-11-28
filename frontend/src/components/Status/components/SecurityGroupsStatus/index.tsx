import { SecurityGroupStatusContainer,  } from "./style";
import { Trash } from 'phosphor-react';
import { useContext } from "react";
import { AppContext } from "../../../../context/Context";

interface ISecurityGroupStatus {
    securityGroupId: string;
    securityGroupName: string;
}
export function SecurityGroupStatus({ securityGroupId, securityGroupName}: ISecurityGroupStatus) {
    const {securityGroups, setSecurityGroups} = useContext(AppContext);

    function handleRemoveSecurityGroup(event) {
        const filteredSecurityGroups = securityGroups.filter((i) => i.id !== securityGroupId);
        setSecurityGroups(filteredSecurityGroups);
    }
    
    
    return (
        <SecurityGroupStatusContainer> 
            <p> {securityGroupName} </p>
            <Trash className="remove" size={16} weight="light" onClick={handleRemoveSecurityGroup} />


        </SecurityGroupStatusContainer>

    )
}