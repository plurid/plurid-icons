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




const handleSize = (
    size: number | 'small' | 'normal' | 'large' | undefined,
) => {
    if (!size) {
        return PLURID_ICON_SIZES_VALUES.normal;
    }

    if (typeof size === 'number') {
        return size;
    }

    switch (size) {
        case PLURID_ICON_SIZES.small:
            return PLURID_ICON_SIZES_VALUES.small;
        case PLURID_ICON_SIZES.normal:
            return PLURID_ICON_SIZES_VALUES.normal;
        case PLURID_ICON_SIZES.large:
            return PLURID_ICON_SIZES_VALUES.large;
        default:
            return PLURID_ICON_SIZES_VALUES.normal;
    }
}


const PluridIcon: React.FC<PluridIconProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** required */
        children,

        /** optional */
        size,
        title,
        atClick,
        inactive,
        titleAppearTime,
        titleDisappearTime,
        theme,
        style,
        className,
    } = properties;


    /** compute */
    const activeTheme = theme || plurid;
    const activeTitleAppearTime = typeof titleAppearTime === 'number'
        ? titleAppearTime
        : DEFAULT_TITLE_APPEAR_TIME;
    const activeTitleDisappearTime = typeof titleDisappearTime === 'number'
        ? titleDisappearTime
        : DEFAULT_TITLE_DISAPPEAR_TIME;
    const imageSize = handleSize(size);


    /** state */
    const [mouseOver, setMouseOver] = useState(false);
    const [showTitle, setShowTitle] = useState(false);


    /** references */
    const hoverInTimeout = useRef<null | NodeJS.Timeout>(null);
    const hoverOutTimeout = useRef<null | NodeJS.Timeout>(null);


    /** effects */
    /** Show title */
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


    /** render */
    return (
        <StyledPluridIcon
            theme={activeTheme}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onMouseMove={() => !mouseOver ? setMouseOver(true) : null}
            onClick={(event) => atClick ? atClick(event) : null}
            style={{
                ...style,
            }}
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
