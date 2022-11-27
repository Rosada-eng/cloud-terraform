import { IAMUserStatus } from "./components/IAMUserStatus";
import { InstanceStatus } from "./components/InstanceStatus";
import { SecurityGroupStatus } from "./components/SecurityGroupsStatus";
import { StatusContainer, StatusBox, StatusColumn, StatusColumnTitle } from "./style";

export function Status() {
    return (
        <StatusContainer>
            <StatusBox>
                <StatusColumn >
                    <StatusColumnTitle> Instâncias </StatusColumnTitle>
                    <InstanceStatus />
                    <InstanceStatus />
                    <InstanceStatus />
                    <InstanceStatus />
                    <InstanceStatus />
                    <p className="see-more"> Ver mais</p>
                </StatusColumn>
                <StatusColumn >
                    <StatusColumnTitle> Grupos de Segurança </StatusColumnTitle>
                    <IAMUserStatus />
                    <IAMUserStatus />
                    <IAMUserStatus />
                    <IAMUserStatus />
                    <p className="see-more"> Ver mais</p>
                </StatusColumn>
                <StatusColumn >
                    <StatusColumnTitle> Usuários IAM </StatusColumnTitle>
                    <SecurityGroupStatus />
                    <SecurityGroupStatus />
                    <SecurityGroupStatus />
                    <p className="see-more"> Ver mais</p>
                </StatusColumn>
            </StatusBox>
        </StatusContainer>
    )
}