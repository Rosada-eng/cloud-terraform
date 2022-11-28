import styled from "styled-components";

export const ApplyButtonContainer = styled.button `
    display: flex;

    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme["yellow-apply-button"]};

    border: none;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme["white"]};

    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    
    align-self: center;
    
    width: 10rem;
    height: 4rem;
    border-radius: 8px;
    
    opacity: 0.7;

    :hover {
        cursor: pointer;
        opacity: 1;
    }

    :disabled {
        opacity: 0.2;
    }
`;