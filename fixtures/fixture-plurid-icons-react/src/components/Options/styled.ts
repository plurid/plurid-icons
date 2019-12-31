import styled from 'styled-components';



export const StyledOptions = styled.div`
    width: 1000px;
    color: black;
    margin: 10px auto;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 1000px) {
        width: 100%;
        flex-direction: column;
    }
`;
