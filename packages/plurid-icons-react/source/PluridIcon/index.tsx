import React, {
    useRef,
    useState,
    useEffect,
} from 'react';

import {
    plurid,
} from '@plurid/plurid-themes';

import {
    StyledPluridIcon,
    StyledPluridIconImage,
    StyledPluridIconTitle,
} from './styled';

import {
    ICON_SIZE_VALUES,
    DEFAULT_TITLE_APPEAR_TIME,
    DEFAULT_TITLE_DISAPPEAR_TIME,
} from '../constants';

import {
    ICON_SIZES,
} from '../enumerations';

import {
    PluridIconProperties,
} from '../interfaces';



const PluridIcon: React.FC<PluridIconProperties> = (properties) => {
    const hoverInTimeout = useRef<null | NodeJS.Timeout>(null);
    const hoverOutTimeout = useRef<null | NodeJS.Timeout>(null);

    const {
        size,
        title,
        titleAppearTime,
        titleDisappearTime,
        theme,
        style,

        children,
    } = properties;

    const activeTheme = theme || plurid;
    const activeTitleAppearTime = typeof titleAppearTime === 'number'
        ? titleAppearTime
        : DEFAULT_TITLE_APPEAR_TIME;
    const activeTitleDisappearTime = typeof titleDisappearTime === 'number'
        ? titleDisappearTime
        : DEFAULT_TITLE_DISAPPEAR_TIME;

    const [imageSize, setImageSize] = useState(ICON_SIZE_VALUES.normal);

    const [mouseOver, setMouseOver] = useState(false);
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        if (size) {
            if (typeof size === 'number') {
                setImageSize(size);
                return;
            }

            switch (size) {
                case ICON_SIZES.small:
                    setImageSize(ICON_SIZE_VALUES.small);
                    break;
                case ICON_SIZES.normal:
                    setImageSize(ICON_SIZE_VALUES.normal);
                    break;
                case ICON_SIZES.large:
                    setImageSize(ICON_SIZE_VALUES.large);
                    break;
                default:
                    setImageSize(ICON_SIZE_VALUES.normal);
            }
        }
    }, [
        size,
    ]);

    useEffect(() => {
        if (mouseOver && hoverOutTimeout.current) {
            hoverInTimeout.current = setTimeout(
                () => {
                    setShowTitle(true);
                },
                activeTitleAppearTime,
            );

            clearTimeout(hoverOutTimeout.current);
        }

        if (!mouseOver) {
            hoverOutTimeout.current = setTimeout(
                () => {
                    setShowTitle(false);
                    if (hoverInTimeout.current) {
                        clearTimeout(hoverInTimeout.current);
                    }
                },
                activeTitleDisappearTime,
            );
        }
    }, [
        mouseOver,
    ]);

    return (
        <StyledPluridIcon
            theme={activeTheme}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onMouseMove={() => mouseOver ? setMouseOver(true) : null}
            style={{...style}}
        >
            <StyledPluridIconImage
                theme={activeTheme}
                imageSize={imageSize}
            >
                {children}
            </StyledPluridIconImage>

            {showTitle
            && title
            && (
                <StyledPluridIconTitle
                    theme={activeTheme}
                    imageSize={imageSize}
                >
                    {title}
                </StyledPluridIconTitle>
            )}
        </StyledPluridIcon>
    );
}


export default PluridIcon;
