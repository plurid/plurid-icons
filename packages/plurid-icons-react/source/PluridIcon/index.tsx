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
    PLURID_ICON_SIZES_VALUES,
    DEFAULT_TITLE_APPEAR_TIME,
    DEFAULT_TITLE_DISAPPEAR_TIME,
} from '../constants';

import {
    PLURID_ICON_SIZES,
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
        inactive,
        style,
        className,
        theme,
        atClick,

        children,
    } = properties;

    const activeTheme = theme || plurid;
    const activeTitleAppearTime = typeof titleAppearTime === 'number'
        ? titleAppearTime
        : DEFAULT_TITLE_APPEAR_TIME;
    const activeTitleDisappearTime = typeof titleDisappearTime === 'number'
        ? titleDisappearTime
        : DEFAULT_TITLE_DISAPPEAR_TIME;

    const [imageSize, setImageSize] = useState(PLURID_ICON_SIZES_VALUES.normal);

    const [mouseOver, setMouseOver] = useState(false);
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        if (size) {
            if (typeof size === 'number') {
                setImageSize(size);
                return;
            }

            switch (size) {
                case PLURID_ICON_SIZES.small:
                    setImageSize(PLURID_ICON_SIZES_VALUES.small);
                    break;
                case PLURID_ICON_SIZES.normal:
                    setImageSize(PLURID_ICON_SIZES_VALUES.normal);
                    break;
                case PLURID_ICON_SIZES.large:
                    setImageSize(PLURID_ICON_SIZES_VALUES.large);
                    break;
                default:
                    setImageSize(PLURID_ICON_SIZES_VALUES.normal);
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

        return () => {
            if (hoverOutTimeout.current) {
                clearTimeout(hoverOutTimeout.current);
            }
            if (hoverInTimeout.current) {
                clearTimeout(hoverInTimeout.current);
            }
        }
    }, [
        mouseOver,
    ]);

    return (
        <StyledPluridIcon
            theme={activeTheme}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onMouseMove={() => !mouseOver ? setMouseOver(true) : null}
            onClick={(event) => atClick ? atClick(event) : null}
            style={{...style}}
            className={className}
        >
            <StyledPluridIconImage
                theme={activeTheme}
                imageSize={imageSize}
                inactive={inactive}
            >
                {children}
            </StyledPluridIconImage>

            {
                title
                && showTitle
                && (
                    <StyledPluridIconTitle
                        theme={activeTheme}
                        imageSize={imageSize}
                    >
                        {title}
                    </StyledPluridIconTitle>
                )
            }
        </StyledPluridIcon>
    );
}


export default PluridIcon;
