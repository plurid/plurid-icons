import React from 'react';

import {
    StyledIconSet,
    StyledIconSetTitle,
    StyledIconSetIcons,
} from './styled';



interface IconSetProperties {
    title: string;
}

const IconSet: React.FC<IconSetProperties> = (properties) => {
    const {
        title,
        children,
    } = properties;

    return (
        <StyledIconSet>
            <StyledIconSetTitle>
                <h2>
                    {title}
                </h2>
            </StyledIconSetTitle>

            <StyledIconSetIcons>
                {children}
            </StyledIconSetIcons>
        </StyledIconSet>
    );
}


export default IconSet;
