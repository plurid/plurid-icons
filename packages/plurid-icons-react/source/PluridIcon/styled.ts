import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



export const StyledPluridIcon = styled.div`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
`;


export const StyledPluridIconImage: any = styled.div`
    user-select: none;

    cursor: ${(props: any) => {
        if (props.inactive) {
            return 'default';
        }
        return 'pointer';
    }};

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



export interface IStyledPluridIconTitle {
    theme: Theme;
    imageSize: number;
    position: 'left' | 'center' | 'right';
}

export const StyledPluridIconTitle = styled.div<IStyledPluridIconTitle>`
    top: ${
        ({
            imageSize,
        }: IStyledPluridIconTitle) => (imageSize + 10) + 'px'
    };
    left: ${
        ({
            position,
        }: IStyledPluridIconTitle) => {
            switch (position) {
                case 'left':
                    return '0';
                case 'center':
                    return '50%';
                case 'right':
                    return '100%';
                default:
                    return '50%';
            }
        }
    };
    transform: ${
        ({
            position,
        }: IStyledPluridIconTitle) => {
            switch (position) {
                case 'left':
                    return 'translateX(0%)';
                case 'center':
                    return 'translateX(-50%)';
                case 'right':
                    return 'translateX(-100%)';
                default:
                    return 'translateX(-50%)';
            }
        }
    };
    background-color: ${
        ({
            theme,
        }: IStyledPluridIconTitle) => theme.backgroundColorSecondary
    };
    box-shadow: ${
        ({
            theme,
        }: IStyledPluridIconTitle) => theme.boxShadowUmbra
    };
    color: ${
        ({
            theme,
        }: IStyledPluridIconTitle) => theme.colorPrimary
    };

    position: absolute;
    padding: 0.4rem;
    z-index: 999999;

    font-size: 0.8rem;
    font-family: Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;

    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    opacity: 1;
`;
