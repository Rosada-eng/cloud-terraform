import styled from 'styled-components';

export const StatusContainer = styled.div`
    display: flex;
    height: 360px;
    width: 100vw;
    padding: 1rem 2rem;
    justify-content: flex-start;
    
    background-color: ${props => props.theme['status-background']};
`;

export const StatusBox = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 100%;

`;

export const StatusColumn = styled.div`
    display: flex;
    flex-direction: column; 

    padding-right: 1rem;

    .see-more {
        font-size: 0.8rem;
        color: ${props => props.theme['blue-button']};

        align-self: flex-end;
        margin-right: 1.5rem;
    }

`;

export const StatusColumnTitle = styled.strong`
    margin-bottom: 1rem;
`;
