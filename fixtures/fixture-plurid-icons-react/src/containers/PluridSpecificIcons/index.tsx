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

import {
    IconListItem,
} from '../../interfaces';



const icons: IconListItem[] = [
    {
        Element: PluridIconDocuments,
        title: 'documents',
    },
    {
        Element: PluridIconFirstPerson,
        title: 'first person',
    },
    {
        Element: PluridIconGlobal,
        title: 'global',
    },
    {
        Element: PluridIconRotate,
        title: 'rotate',
    },
    {
        Element: PluridIconScale,
        title: 'scale',
    },
    {
        Element: PluridIconTranslate,
        title: 'translate',
    },
];


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
            {icons.map(icon => {
                const {
                    Element,
                    title,
                } = icon;

                return (
                    <Element
                        key={title}
                        theme={theme}
                        title={title}
                        size={iconSize}
                    />
                );
            })}
        </IconSet>
    );
}


export default PluridSpecificIcons;
