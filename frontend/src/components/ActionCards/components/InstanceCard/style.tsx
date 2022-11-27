import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 256px;
    height: 320px;

    justify-content: center;
    align-items: center;
    
    border-radius: 16px;
    background-color: ${props => props.theme["orange-background"]};

    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

    :hover {
        cursor: pointer;
        transform: scale(1.02);
        transition: 0.1s;
    }
`;

export const CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.theme["orange"]};

    padding: 1.5rem 0;
    text-align: center;
`;