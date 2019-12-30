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
    DEFAULT_TITLE_HOVER_TIME,
} from '../constants';



const PluridIcon: React.FC<PluridIconProperties> = (properties) => {
    const {
        title,
        titleHoverTime,
        theme,

        children,
    } = properties;

    const [mouseOver, setMouseOver] = useState(false);
    const [showTitle, setShowTitle] = useState(false);

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
            <StyledPluridIconImage>
                {children}
            </StyledPluridIconImage>

            {showTitle && (
                <StyledPluridIconTitle>
                    {title}
                </StyledPluridIconTitle>
            )}
        </StyledPluridIcon>
    );
}


export default PluridIcon;
