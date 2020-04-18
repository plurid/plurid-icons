import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconAdd,
    PluridIconAddAlbum,
    PluridIconAddImage,
    PluridIconAdminSpace,
    PluridIconApps,
    PluridIconArrowDown,
    PluridIconArrowLeft,
    PluridIconArrowRight,
    PluridIconArrowUp,
    PluridIconBrainCircuits,
    PluridIconCommand,
    PluridIconContact,
    PluridIconContents,
    PluridIconCopy,
    PluridIconDeauthored,
    PluridIconDelete,
    PluridIconEdit,
    PluridIconEmail,
    PluridIconEnter,
    PluridIconExpandMinus,
    PluridIconExpandPlus,
    PluridIconExplore,
    PluridIconExternalLink,
    PluridIconFrame,
    PluridIconImagelists,
    PluridIconInfo,
    PluridIconIngress,
    PluridIconLink,
    PluridIconLocked,
    PluridIconMore,
    PluridIconObliterate,
    PluridIconPalette,
    PluridIconPersonalSpace,
    PluridIconPolicies,
    PluridIconQRCode,
    PluridIconSave,
    PluridIconSettings,
    PluridIconShare,
    PluridIconSpace,
    PluridIconSpeak,
    PluridIconStatistics,
    PluridIconSubscription,
    PluridIconSystem,
    PluridIconToolbox,
    PluridIconTools,
    PluridIconUnlocked,
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
        Element: PluridIconApps,
        title: 'apps',
    },
    {
        Element: PluridIconArrowDown,
        title: 'arrow down',
    },
    {
        Element: PluridIconArrowLeft,
        title: 'arrow left',
    },
    {
        Element: PluridIconArrowRight,
        title: 'arrow right',
    },
    {
        Element: PluridIconArrowUp,
        title: 'arrow up',
    },
    {
        Element: PluridIconBrainCircuits,
        title: 'brain circuits',
    },
    {
        Element: PluridIconCommand,
        title: 'command',
    },
    {
        Element: PluridIconContact,
        title: 'contact',
    },
    {
        Element: PluridIconContents,
        title: 'contents',
    },
    {
        Element: PluridIconCopy,
        title: 'copy',
    },
    {
        Element: PluridIconDeauthored,
        title: 'deauthored',
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
        Element: PluridIconEmail,
        title: 'email',
    },
    {
        Element: PluridIconEnter,
        title: 'enter',
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
        Element: PluridIconExternalLink,
        title: 'external link',
    },
    {
        Element: PluridIconFrame,
        title: 'frame',
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
        Element: PluridIconPalette,
        title: 'palette',
    },
    {
        Element: PluridIconPersonalSpace,
        title: 'personal space',
    },
    {
        Element: PluridIconPolicies,
        title: 'policies',
    },
    {
        Element: PluridIconQRCode,
        title: 'qr code',
    },
    {
        Element: PluridIconSave,
        title: 'save',
    },
    {
        Element: PluridIconSettings,
        title: 'settings',
    },
    {
        Element: PluridIconShare,
        title: 'share',
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
        Element: PluridIconToolbox,
        title: 'toolbox',
    },
    {
        Element: PluridIconTools,
        title: 'tools',
    },
    {
        Element: PluridIconUnlocked,
        title: 'unlocked',
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
    titleAppearTime: number;
    titleDisappearTime: number;
}

const GeneralIcons: React.FC<GeneralIconsProperties> = (properties) => {
    const {
        theme,
        iconSize,
        titleAppearTime,
        titleDisappearTime,
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
                        titleAppearTime={titleAppearTime}
                        titleDisappearTime={titleDisappearTime}
                    />
                );
            })}
        </IconSet>
    );
}


export default GeneralIcons;
