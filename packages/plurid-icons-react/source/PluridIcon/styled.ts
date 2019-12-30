import styled from 'styled-components';



export const StyledPluridIcon = styled.div`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
`;


export const StyledPluridIconImage: any = styled.div`
    cursor: pointer;
    user-select: none;
    svg {
        display: block;
        fill: ${(props: any) => {
            return props.theme.colorPrimary;
        }};
        width: ${(props: any) => {
            return props.imageSize + 'px';
        }};
        height: ${(props: any) => {
            return props.imageSize + 'px';
        }}
    }
`;


export const StyledPluridIconTitle: any = styled.div`
    user-select: none;
    position: absolute;
    top: ${(props: any) => {
        return props.imageSize + 10 + 'px';
    }};
    left: 50%;
    transform: translateX(-50%);
    padding: 0.4rem;
    font-size: 0.8rem;
    font-family: Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;

    background-color: ${(props: any) => {
        return props.theme.backgroundColorSecondary;
    }};
    box-shadow: ${(props: any) => {
        return props.theme.boxShadowUmbra;
    }};
    color: ${(props: any) => {
        return props.theme.colorPrimary;
    }};
`;
