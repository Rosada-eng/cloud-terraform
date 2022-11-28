import styled from "styled-components";


export const GressFormsNumbersDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0.2rem;
`;

export const StyledInputNumbers = styled.input`
    width: 5rem;
    border: 1px solid ${props => props.theme["gray-300"]};

    border-radius: 0.5rem;
    padding: .5rem;
`

export const AddButon = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 2rem;
    color: ${props => props.theme["white"]};
    border-radius: 8px;
    border: none;
    background-color: ${props => props.theme["blue-button"]};
`;
