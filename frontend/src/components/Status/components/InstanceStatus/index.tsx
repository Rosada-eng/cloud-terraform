import { InstancesStatusContainer, InstanceStatusAndName, InstaceAbout } from "./style";
import { Circle, Trash } from 'phosphor-react';
import { defaultTheme } from "../../../../styles/themes/default";
import { AppContext } from "../../../../context/Context";
import { useContext } from "react";

interface IInstanceStatus {
    instanceId: string;
    instanceName: string;
    instanceStatus: string;
    instanceType: string;
    instanceZone: string | [string];
}


export function InstanceStatus({ instanceId, instanceStatus, instanceName, instanceType, instanceZone}:IInstanceStatus) {
    const {instances, setInstances} = useContext(AppContext);



    function handleRemoveInstance(event) {
        event.preventDefault();
        const filteredInstances = instances.filter((i) => i.id !== instanceId);
        setInstances(filteredInstances);
        
    }


    return (
        <InstancesStatusContainer> 
            <InstanceStatusAndName>
                <Circle size={10} color={instanceStatus === 'running' ? defaultTheme["green-button"] : defaultTheme["red-icon"]} weight="fill" />
                <strong>{instanceName}</strong>
            </InstanceStatusAndName>
            <InstaceAbout>
                <p> {instanceType}</p>
                <p> {instanceZone}</p>
                <Trash className="remove" size={16} weight="light" onClick={handleRemoveInstance}/>
            </InstaceAbout>
        </InstancesStatusContainer>

    )
}