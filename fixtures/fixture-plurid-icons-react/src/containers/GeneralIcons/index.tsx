import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconAdd,
    PluridIconAddAlbum,
    PluridIconAddImage,
    PluridIconAdminSpace,
    PluridIconCommand,
    PluridIconCopy,
    PluridIconDelete,
    PluridIconExplore,
    PluridIconMore,
    PluridIconObliterate,
    PluridIconSettings,
    PluridIconSpeak,
    PluridIconStatistics,
    PluridIconSystem,
    PluridIconUsers,
} from '@plurid/plurid-icons-react';

import IconSet from '../../components/IconSet';

import {
    IconListItem,
} from '../../interfaces';



const icons: IconListItem[] = [
    {
        Element: PluridIconAdd,
        title: 'add',
    },
    {
        Element: PluridIconAddAlbum,
        title: 'add album',
    },
    {
        Element: PluridIconAddImage,
        title: 'add image',
    },
    {
        Element: PluridIconAdminSpace,
        title: 'admin space',
    },
    {
        Element: PluridIconCommand,
        title: 'command',
    },
    {
        Element: PluridIconCopy,
        title: 'copy',
    },
    {
        Element: PluridIconDelete,
        title: 'delete',
    },
    {
        Element: PluridIconExplore,
        title: 'explore',
    },
    {
        Element: PluridIconMore,
        title: 'more',
    },
    {
        Element: PluridIconObliterate,
        title: 'obliterate',
    },
    {
        Element: PluridIconSettings,
        title: 'settings',
    },
    {
        Element: PluridIconSpeak,
        title: 'speak',
    },
    {
        Element: PluridIconStatistics,
        title: 'statistics',
    },
    {
        Element: PluridIconSystem,
        title: 'system',
    },
    {
        Element: PluridIconUsers,
        title: 'users',
    },
];


interface GeneralIconsProperties {
    theme: Theme;
    iconSize: 'small' | 'normal' | 'large';
}

const GeneralIcons: React.FC<GeneralIconsProperties> = (properties) => {
    const {
        theme,
        iconSize,
    } = properties;

    return (
        <IconSet
            title="general icons"
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


export default GeneralIcons;
