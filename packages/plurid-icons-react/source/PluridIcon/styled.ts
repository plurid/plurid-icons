// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        PluridIconLocation,
        PluridIconPosition,
    } from '../interfaces';
    // #endregion external
// #endregion imports



// #region module
export const StyledPluridIcon = styled.div`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
`;


export interface IStyledPluridIconImage {
    theme: Theme;
    inactive: boolean | undefined;
    iconSize: number;
    opacity: number;
    color: string | undefined;
}

export const StyledPluridIconImage = styled.div<IStyledPluridIconImage>`
    user-select: none;

    cursor: ${
        ({
            inactive,
        }: IStyledPluridIconImage) => inactive ? 'default' : 'pointer'
    };
    opacity: ${
        ({
            opacity,
        }: IStyledPluridIconImage) => opacity
    };

    svg {
        display: block;
        fill: ${
            ({
                theme,
                color,
            }: IStyledPluridIconImage) => {
                if (color) {
                    return color;
                }

                return theme.colorPrimary;
            }
        };
        width: ${
            ({
                iconSize,
            }: IStyledPluridIconImage) => iconSize + 'px'
        };
        max-width: ${
            ({
                iconSize,
            }: IStyledPluridIconImage) => iconSize + 'px'
        };
        height: ${
            ({
                iconSize,
            }: IStyledPluridIconImage) => iconSize + 'px'
        };
    }
`;



export interface IStyledPluridIconTitle {
    theme: Theme;
    iconSize: number;
    position: PluridIconPosition;
    location: PluridIconLocation;
}


export const StyledPluridIconTitle = styled.div<IStyledPluridIconTitle>`
    top: ${
        ({
            iconSize,
            location,
        }: IStyledPluridIconTitle) => {
            switch (location) {
                case 'above':
                    return (-1 * (iconSize + 22)) + 'px';
                case 'left':
                    return (-1 * (iconSize / 2 - 1)) + 'px';
                case 'right':
                    return (-1 * (iconSize / 2 - 1)) + 'px';
                case 'under':
                default:
                    return (iconSize + 10) + 'px';
            }
        }
    };
    left: ${
        ({
            position,
            location,
            iconSize,
        }: IStyledPluridIconTitle) => {
            if (location) {
                switch (location) {
                    case 'left':
                        return 'initial';
                    case 'right':
                        return (iconSize + 10) + 'px';
                }
            }

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
    right: ${
        ({
            location,
            iconSize,
        }: IStyledPluridIconTitle) => {
            if (location) {
                switch (location) {
                    case 'left':
                        return (iconSize + 10) + 'px';
                }
            }

            return 'initial';
        }
    };
    transform: ${
        ({
            position,
            location,
        }: IStyledPluridIconTitle) => {
            if (location) {
                switch (location) {
                    case 'left':
                    case 'right':
                        return 'initial';
                }
            }

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
    font-family: ${
        ({
            theme,
        }: IStyledPluridIconTitle) => theme.fontFamilySansSerif
    };

    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    opacity: 1;
`;
// #endregion module
