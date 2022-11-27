import { InstancesStatusContainer, InstanceStatusAndName, InstaceAbout } from "./style";
import { Circle, Trash } from 'phosphor-react';
import { defaultTheme } from "../../../../styles/themes/default";

export function InstanceStatus() {
    return (
        <InstancesStatusContainer> 
            <InstanceStatusAndName>
                <Circle size={10} color={defaultTheme["green-button"]} weight="fill" />
                <strong> Nome grande da instância </strong>
            </InstanceStatusAndName>
            <InstaceAbout>
                <p> t2.tiny </p>
                <p> us-arizona-1 </p>
                <Trash size={16} weight="light" />
            </InstaceAbout>
        </InstancesStatusContainer>

    )
}