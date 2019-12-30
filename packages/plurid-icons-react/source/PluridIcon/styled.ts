import styled from 'styled-components';



export const StyledPluridIcon = styled.div`
    position: relative;
    display: grid;
    place-content: center;
`;


export const StyledPluridIconImage: any = styled.div`
    svg {
        fill: ${(props: any) => {
            return props.theme.colorPrimary;
        }};
        width: ${(props: any) => {
            return props.size + 'px';
        }};
        height: ${(props: any) => {
            return props.size + 'px';
        }}
    }
`;


export const StyledPluridIconTitle = styled.div`
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.3rem;

    background-color: ${(props: any) => {
        return props.theme.backgroundColorPrimary;
    }};
    color: ${(props: any) => {
        return props.theme.colorPrimary;
    }};
`;
