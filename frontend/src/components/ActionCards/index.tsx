import { InstanceCard } from "./components/InstanceCard";
import { SecurityGroupCard } from "./components/SecurityGroupCard";
import { UsersIAMCard } from "./components/UsersIAMCard";
import { ActionCardsContainer } from "./style";

export function ActionCards() {
    return (
        <ActionCardsContainer>
            <InstanceCard />
            <SecurityGroupCard />
            <UsersIAMCard />
        </ActionCardsContainer>
    )
}