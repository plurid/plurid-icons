import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconDocuments,
    PluridIconFirstPerson,
    PluridIconGlobal,
    PluridIconRotate,
    PluridIconScale,
    PluridIconTranslate,
} from '@plurid/plurid-icons-react';

import IconSet from '../../components/IconSet';



interface PluridSpecificIconsProperties {
    theme: Theme;
    iconSize: 'small' | 'normal' | 'large';
}

const PluridSpecificIcons: React.FC<PluridSpecificIconsProperties> = (properties) => {
    const {
        theme,
        iconSize,
    } = properties;

    return (
        <IconSet
            title="plurid' specific icons"
        >
            <PluridIconDocuments
                theme={theme}
                title="documents"
                size={iconSize}
            />
            <PluridIconFirstPerson
                theme={theme}
                title="first person"
                size={iconSize}
            />
            <PluridIconGlobal
                theme={theme}
                title="global"
                size={iconSize}
            />
            <PluridIconRotate
                theme={theme}
                title="rotate"
                size={iconSize}
            />
            <PluridIconScale
                theme={theme}
                title="scale"
                size={iconSize}
            />
            <PluridIconTranslate
                theme={theme}
                title="translate"
                size={iconSize}
            />
        </IconSet>
    );
}


export default PluridSpecificIcons;
