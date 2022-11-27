import { HeaderContainer, VPCContainer } from "./style";
import AwsLogo from "../../assets/Amazon_Web_Services_Logo.svg";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
export function Header() {
    const [data, setData] = useState({});
    const [vpc, setVpc] = useState<IVPC>({id: "", name: "", cidr_block: "", arn: ""}); 

    const filterVPC = (rawData:IRequestData) => {
        const vpc = {
            id: rawData.vpc_id.value,
            name: rawData.vpc_name.value,
            cidr_block: rawData.vpc_cidr_block.value,
            arn: rawData.vpc_arn.value
        }

        console.log(vpc);
        setVpc(vpc);
        
    }

    const fetchVPC = async () => {
        const result = await api.get('/status');
        setData(result.data);
        filterVPC(result.data);
    }

    useEffect(() => {
        fetchVPC();
    
    }, [])


    return (
        <div>
        <HeaderContainer>
            <img src={AwsLogo} width={48}alt="AWS Logo" />
            <VPCContainer>
                <strong>VPC: {vpc.name} </strong>
                <span>Public IP: {vpc.cidr_block}</span>
                <span>id: {vpc.id}</span>
            </VPCContainer>
        </HeaderContainer>

        </div>
    )
}