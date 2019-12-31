import styled from 'styled-components';



export const StyledIconSet = styled.div`
    padding-bottom: 3rem;
`;


export const StyledIconSetTitle = styled.div`
    margin-top: 4rem;
    margin-bottom: 2.5rem;
`;


export const StyledIconSetIcons = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    justify-content: center;
    grid-gap: 4rem;
    grid-template-columns: repeat(9, 5rem);

    @media (max-width: 1200px) {
        grid-template-columns: repeat(7, 3rem);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(5, 2rem);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(4, 2rem);
    }
`;
