import styled from "styled-components";

export const ChangesFeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 17rem;
    min-height: 10rem;

    padding: 1rem;
    background-color: ${props => props.theme["changes-background"]};
    border: 1px solid ${props => props.theme["changes-background-border"]};
    border-radius: 8px;
`;

export const ChangeStatus = styled.div`
    display: flex;


`;