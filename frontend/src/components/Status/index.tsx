import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { api } from "../../services/api";
import { IAMUserStatus } from "./components/IAMUserStatus";
import { InstanceStatus } from "./components/InstanceStatus";
import { SecurityGroupStatus } from "./components/SecurityGroupsStatus";
import { StatusContainer, StatusBox, StatusColumn, StatusColumnTitle } from "./style";



export function Status() {
    const [data, setData] = useState({});

    const [loadingInstance, setLoadingInstance] = useState(true);
    const [loadingSecurityGroup, setLoadingSecurityGroup] = useState(true);
    const [loadingIAMUser, setLoadingIAMUser] = useState(true);


    const {instances, setInstances, securityGroups, setSecurityGroups, IAMUsers, setIAMUsers, vpcName, setVpcName} = useContext(AppContext);

    const filterVPCName = (rawData: IRequestData) => {
        const vpcName = rawData.vpc_name.value;
        setVpcName(vpcName);
    }
    const filterInstances = (rawData: IRequestData) => {
        let array = Object.entries(rawData.instances.value);
        const instances = array.map((i) => {
            return {
                id: i[1].id,
                name: i[0],
                ami: i[1].ami,
                arn: i[1].arn,
                instance_type: i[1].instance_type,
                instance_state: i[1].instance_state,
                availability_zone: i[1].availability_zone,
                cpu_core_count: i[1].cpu_core_count,
                cpu_threads_per_core: i[1].cpu_threads_per_core,
                public_ip: i[1].public_ip,
                private_ip: i[1].private_ip,
                public_dns: i[1].public_dns,
                subnet_id: i[1].subnet_id,
                vpc_security_group_ids: i[1].vpc_security_group_ids
            };
        })
        console.log("instances: ", instances);
        setInstances(instances);
    }

    const filterUsers = (rawData: IRequestData) => {
        console.log(rawData)
        let array = Object.entries(rawData.users.value);
        const users = array.map((i) => i[0])
        console.log("users: ", users);
        setIAMUsers(users);
    }

    const filterSecurityGroups = (rawData: IRequestData) => {
        let array = Object.entries(rawData.sg.value);
        const securityGroups = array.map((i) => {
            return {
                id: i[1].id,
                name: i[0],
                arn: i[1].arn,
                description: i[1].description,
                vpc_id: i[1].vpc_id,
                ingress: i[1].ingress,
                egress: i[1].egress
            };
        })
        console.log("securityGroups: ", securityGroups);
        setSecurityGroups(securityGroups);

    }

    const fetchStatus = async () => {
        setLoadingIAMUser(true);
        setLoadingInstance(true);
        setLoadingSecurityGroup(true);

        const result = await api.get('/status');
        if (result.status === 200) {
            setData(result.data);
            filterVPCName(result.data);
            filterInstances(result.data);
            filterUsers(result.data);
            filterSecurityGroups(result.data);
        }

        setLoadingIAMUser(false);
        setLoadingInstance(false);
        setLoadingSecurityGroup(false);

    }


    useEffect(() => {
        fetchStatus();
    }, [])


    return (
        <StatusContainer>
            <StatusBox>
                {loadingInstance ? 
                    <p>Carregando...</p> 
                    :
                <StatusColumn >
                    <StatusColumnTitle> Instâncias </StatusColumnTitle>
                    {instances.slice(0, 12).map((instance) => {
                        return (
                        <InstanceStatus 
                            key={instance.id}
                            instanceId={instance.id}
                            instanceStatus={instance.instance_state}
                            instanceName={instance.name} 
                            instanceType={instance.instance_type} 
                            instanceZone={instance.availability_zone} 
                        />)
                    })}
                    <Link className="see-more" to="/instances">Ver todas</Link>
                </StatusColumn> 
                    
                }
                
                {loadingSecurityGroup ? 
                    <p>Carregando...</p>
                    :
                    <StatusColumn >
                        <StatusColumnTitle> Grupos de Segurança </StatusColumnTitle>
                        {securityGroups.slice(0, 12).map((sg) => {
                            return (
                                <SecurityGroupStatus 
                                key={sg.id}
                                securityGroupId={sg.id}
                                securityGroupName={sg.name} 
                                />)
                            })}
                        <Link className="see-more" to="/security_groups">Ver todas</Link>
                    </StatusColumn>
                }   

                {loadingIAMUser ?
                    <p>Carregando...</p>
                    :   
                    <StatusColumn >
                    <StatusColumnTitle> Usuários IAM </StatusColumnTitle>
                    {IAMUsers.slice(0, 12).map((user) => {
                        return (
                            <IAMUserStatus 
                            key={user}
                            userName={user} 
                            />)
                        })}
                    <Link className="see-more" to="/users">Ver todas</Link>
                </StatusColumn>
                }
            </StatusBox>
        </StatusContainer>
    )
}