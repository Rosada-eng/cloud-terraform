import { SecurityGroupStatusContainer,  } from "./style";
import { Trash } from 'phosphor-react';

interface ISecurityGroupStatus {
    securityGroupName: string;
}
export function SecurityGroupStatus({ securityGroupName}: ISecurityGroupStatus) {
    return (
        <SecurityGroupStatusContainer> 
            <p> {securityGroupName} </p>
            <Trash size={16} weight="light" />


        </SecurityGroupStatusContainer>

    )
}