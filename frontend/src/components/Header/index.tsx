import { HeaderContainer, VPCContainer } from "./style";
import AwsLogo from "../../assets/Amazon_Web_Services_Logo.svg";
export function Header() {
    return (
        <div>
        <HeaderContainer>
            <img src={AwsLogo} width={48}alt="AWS Logo" />
            <VPCContainer>
                <strong>VPC: Rosada's Virtual Private Cloud </strong>
                <span>Public IP: 10.101.102.3</span>
                <span>id: ashduahsudhasudhaushdsuah</span>
            </VPCContainer>
        </HeaderContainer>

        </div>
    )
}