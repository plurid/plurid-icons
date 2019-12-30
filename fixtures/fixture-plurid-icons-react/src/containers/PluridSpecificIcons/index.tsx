import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconDocuments,
    PluridIconFirstPerson,
    PluridIconGlobal,
    PluridIconLayout,
    PluridIconOrder,
    PluridIconRevert,
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
        Element: PluridIconLayout,
        title: 'layout',
    },
    {
        Element: PluridIconOrder,
        title: 'order',
    },
    {
        Element: PluridIconRevert,
        title: 'revert',
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
    titleAppearTime: number;
    titleDisappearTime: number;
}

const PluridSpecificIcons: React.FC<PluridSpecificIconsProperties> = (properties) => {
    const {
        theme,
        iconSize,
        titleAppearTime,
        titleDisappearTime,
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
                        titleAppearTime={titleAppearTime}
                        titleDisappearTime={titleDisappearTime}
                    />
                );
            })}
        </IconSet>
    );
}


export default PluridSpecificIcons;
