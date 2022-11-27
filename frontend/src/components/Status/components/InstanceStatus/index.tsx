import { InstancesStatusContainer, InstanceStatusAndName, InstaceAbout } from "./style";
import { Circle, Trash } from 'phosphor-react';
import { defaultTheme } from "../../../../styles/themes/default";

interface IInstanceStatus {
    instanceName: string;
    instanceStatus: string;
    instanceType: string;
    instanceZone: string | [string];
}

export function InstanceStatus({ instanceStatus, instanceName, instanceType, instanceZone}:IInstanceStatus) {
    return (
        <InstancesStatusContainer> 
            <InstanceStatusAndName>
                <Circle size={10} color={instanceStatus === 'running' ? defaultTheme["green-button"] : defaultTheme["red-icon"]} weight="fill" />
                <strong>{instanceName}</strong>
            </InstanceStatusAndName>
            <InstaceAbout>
                <p> {instanceType}</p>
                <p> {instanceZone}</p>
                <Trash size={16} weight="light" />
            </InstaceAbout>
        </InstancesStatusContainer>

    )
}