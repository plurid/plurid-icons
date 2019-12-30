import React, {
    useState,
    useEffect,
} from 'react';

import {
    StyledPluridIcon,
    StyledPluridIconImage,
    StyledPluridIconTitle,
} from './styled';

import {
    PluridIconProperties,
} from '../interfaces';

import {
    IMAGE_SIZES,
    DEFAULT_TITLE_HOVER_TIME,
} from '../constants';



const PluridIcon: React.FC<PluridIconProperties> = (properties) => {
    const {
        size,
        title,
        titleHoverTime,
        theme,

        children,
    } = properties;

    const [imageSize, setImageSize] = useState(IMAGE_SIZES.NORMAL);

    const [mouseOver, setMouseOver] = useState(false);
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        if (size) {
            if (typeof size === 'number') {
                setImageSize(size);
                return;
            }

            switch (size) {
                case 'small':
                    setImageSize(IMAGE_SIZES.SMALL);
                    break;
                case 'normal':
                    setImageSize(IMAGE_SIZES.NORMAL);
                    break;
                case 'large':
                    setImageSize(IMAGE_SIZES.LARGE);
                    break;
                default:
                    setImageSize(IMAGE_SIZES.NORMAL);
            }
        }
    }, [
        size,
    ]);

    useEffect(() => {
        if (mouseOver) {
            setShowTitle(true);
        } else {
            setShowTitle(false);
        }
    }, [
        mouseOver,
    ]);

    return (
        <StyledPluridIcon
            theme={theme}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onMouseMove={() => mouseOver ? setMouseOver(true) : null}
        >
            <StyledPluridIconImage
                theme={theme}
                imageSize={imageSize}
            >
                {children}
            </StyledPluridIconImage>

            {showTitle
            && title
            && (
                <StyledPluridIconTitle
                    theme={theme}
                    imageSize={imageSize}
                >
                    {title}
                </StyledPluridIconTitle>
            )}
        </StyledPluridIcon>
    );
}


export default PluridIcon;
