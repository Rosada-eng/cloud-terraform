import styled from 'styled-components';

export const IAMUserStatusContainer = styled.div`
    display: flex;

    align-items: center;
    justify-content: flex-end;

    width: 15rem;
    margin-bottom: .5rem;
    font-size: 0.8rem;
    gap: .5rem;

    .remove {
        :hover {
            cursor: pointer;
        }
    }
`;