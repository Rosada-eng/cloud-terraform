import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../../../context/Context";
import { api } from "../../../../services/api";
import { ApplyButtonContainer } from "./style";

export function ApplyButton() {
    const { vpcName, instances, securityGroups, IAMUsers } = useContext(AppContext);
    const [isApplying, setIsApplying] = useState(false);

    const askApply = async (json) => { 
        setIsApplying(true);
        const result = await api.post("/apply", json);
        console.log(result.data);
        setIsApplying(false);
    }

    function compileJSON() {
        console.log("instances ", instances);

        let json = {
            "aws-region": "us-east-1",
            "vpc_name": vpcName,
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
            "users": IAMUsers.filter((u) => u.name !== "")

          }
        console.log(json);
        
        askApply(json);
        
    }



    return (
        
        <ApplyButtonContainer onClick={compileJSON} disabled={isApplying}>
            {isApplying ? "Applying..." : "APPLY"}
        </ApplyButtonContainer>
    )
}