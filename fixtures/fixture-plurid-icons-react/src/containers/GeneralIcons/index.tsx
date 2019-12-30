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
    PluridIconEdit,
    PluridIconExpandMinus,
    PluridIconExpandPlus,
    PluridIconExplore,
    PluridIconImagelists,
    PluridIconInfo,
    PluridIconIngress,
    PluridIconLink,
    PluridIconLocked,
    PluridIconMore,
    PluridIconObliterate,
    PluridIconPersonalSpace,
    PluridIconSettings,
    PluridIconSpace,
    PluridIconSpeak,
    PluridIconStatistics,
    PluridIconSubscription,
    PluridIconSystem,
    PluridIconUsers,
    PluridIconWorldSpace,
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
        Element: PluridIconEdit,
        title: 'edit',
    },
    {
        Element: PluridIconExpandMinus,
        title: 'expand minus',
    },
    {
        Element: PluridIconExpandPlus,
        title: 'expand plus',
    },
    {
        Element: PluridIconExplore,
        title: 'explore',
    },
    {
        Element: PluridIconImagelists,
        title: 'imagelists',
    },
    {
        Element: PluridIconInfo,
        title: 'info',
    },
    {
        Element: PluridIconIngress,
        title: 'ingress',
    },
    {
        Element: PluridIconLink,
        title: 'link',
    },
    {
        Element: PluridIconLocked,
        title: 'locked',
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
        Element: PluridIconPersonalSpace,
        title: 'personal space',
    },
    {
        Element: PluridIconSettings,
        title: 'settings',
    },
    {
        Element: PluridIconSpace,
        title: 'space',
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
        Element: PluridIconSubscription,
        title: 'subscription',
    },
    {
        Element: PluridIconSystem,
        title: 'system',
    },
    {
        Element: PluridIconUsers,
        title: 'users',
    },
    {
        Element: PluridIconWorldSpace,
        title: 'world space',
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
