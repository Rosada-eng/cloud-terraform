import styled from "styled-components";

export const StyledForms = styled.form`
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;


    width: 30rem;
    gap: 0.5rem;

    padding: 1rem;

`;

export const StyledInput = styled.input`
    width: 100%;
    height: 2rem;

    border: 1px solid ${props => props.theme["gray-300"]};

    border-radius: 0.5rem;
    padding: .5rem;
`;