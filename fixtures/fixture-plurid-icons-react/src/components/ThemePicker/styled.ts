import styled from 'styled-components';



export const StyledThemePicker = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    background-color: white;
    color: black;
    margin-top: 10px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        display: flex;
        width: 1200px;
        overflow: auto;
    }

    @media (max-width: 1200px) {
        ul {
            width: 1000px;
        }
    }

    @media (max-width: 1000px) {
        ul {
            width: 800px;
        }
    }

    @media (max-width: 800px) {
        ul {
            width: 400px;
        }
    }
`;
