import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;

    width: 100vw;
    height: 100px; 

    padding: 1rem;
    margin: 0 auto;
    
    justify-content: center;
    align-items: center;
    
    background-color: ${props => props.theme['blue-background']};

`;

export const VPCContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-end;
    margin-left: 60rem;    
`;