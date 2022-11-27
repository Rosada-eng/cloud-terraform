import { ChangeStatusRow } from "./components/ChangeStatusRow";
import { ChangesFeedbackContainer } from "./style";

export function ChangesFeedback() {
    return (
        <ChangesFeedbackContainer>
            <ChangeStatusRow changeStatus="add" changeName="Instância" />
            <ChangeStatusRow changeStatus="remove" changeName="Instância-1" />
            <ChangeStatusRow changeStatus="add" changeName="Instância-2" />
            <ChangeStatusRow changeStatus="add" changeName="Instância-3" />
        </ChangesFeedbackContainer>
    )
}