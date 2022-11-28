import { useContext } from "react";
import { AppContext } from "../../../../context/Context";
import { ApplyButtonContainer } from "./style";

export function ApplyButton() {
    const { instances, securityGroups, IAMUsers } = useContext(AppContext);

    function compileJSON() {
        let json = {
            "aws-region": "us-east-1",
            "security_groups": securityGroups,
            "instances": instances,
          }
          
        console.log(json);
    }



    return (
        <ApplyButtonContainer onClick={compileJSON}>
            APLICAR
        </ApplyButtonContainer>
    )
}