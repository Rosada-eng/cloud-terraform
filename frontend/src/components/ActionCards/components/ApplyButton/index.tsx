import { useContext } from "react";
import { AppContext } from "../../../../context/Context";
import { api } from "../../../../services/api";
import { ApplyButtonContainer } from "./style";

export function ApplyButton() {
    const { instances, securityGroups, IAMUsers, setChangedIAMUsers, setChangedInstances, setChangedSecurityGroups } = useContext(AppContext);


    const askApply = async (json) => { 
        const result = await api.post("/apply", json);
        console.log(result);
    }

    function compileJSON() {
        console.log("instances ", instances);

        let json = {
            "aws-region": "us-east-1",
            "security_groups": securityGroups.map((sg) => {
                return {
                    "name": sg.name,
                    "description": sg.description,
                    "ingress": sg.ingress,
                    "egress": sg.egress
                }
            }),
            "instances": instances.map((i) => {
                return {
                    "name": i.name,
                    "ami": i.ami,
                    "type": i.instance_type,
                    "key_name": "guilherme.rosada",
                    "is_public": i.is_public? i.is_public : true,
                    "security_groups": i.vpc_security_group_ids,
                    "subnet_id": i.subnet_id
                }
            }),

          }
        console.log(json);
        
        askApply(json);
        
    }



    return (
        <ApplyButtonContainer onClick={compileJSON}>
            APLICAR
        </ApplyButtonContainer>
    )
}