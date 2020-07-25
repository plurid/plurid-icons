import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconAdd,
    PluridIconAddAlbum,
    PluridIconAddImage,
    PluridIconAdminSpace,
    PluridIconAnnotation,
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
    PluridIconDownload,
    PluridIconDuplicate,
    PluridIconEdit,
    PluridIconEmail,
    PluridIconEnter,
    PluridIconExpandMinus,
    PluridIconExpandPlus,
    PluridIconExplore,
    PluridIconExternalLink,
    PluridIconExtract,
    PluridIconFrame,
    PluridIconFullscreen,
    PluridIconGet,
    PluridIconGoToLink,
    PluridIconGrab,
    PluridIconHighlight,
    PluridIconImagelists,
    PluridIconInfo,
    PluridIconIngress,
    PluridIconInvalid,
    PluridIconLink,
    PluridIconLocked,
    PluridIconMore,
    PluridIconNotViewable,
    PluridIconObliterate,
    PluridIconOpacity,
    PluridIconPaintBrush,
    PluridIconPaintBucket,
    PluridIconPalette,
    PluridIconPersonalSpace,
    PluridIconPolicies,
    PluridIconQRCode,
    PluridIconReset,
    PluridIconSave,
    PluridIconSettings,
    PluridIconShare,
    PluridIconSpace,
    PluridIconSpeak,
    PluridIconStatistics,
    PluridIconSubscription,
    PluridIconSystem,
    PluridIconTag,
    PluridIconToolbox,
    PluridIconTools,
    PluridIconTransview,
    PluridIconUnlocked,
    PluridIconUpload,
    PluridIconUsers,
    PluridIconValid,
    PluridIconViewable,
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
        Element: PluridIconAnnotation,
        title: 'annotation',
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
        Element: PluridIconDownload,
        title: 'download',
    },
    {
        Element: PluridIconDuplicate,
        title: 'duplicate',
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
        Element: PluridIconExtract,
        title: 'extract',
    },
    {
        Element: PluridIconFrame,
        title: 'frame',
    },
    {
        Element: PluridIconFullscreen,
        title: 'fullscreen',
    },
    {
        Element: PluridIconGet,
        title: 'get',
    },
    {
        Element: PluridIconGoToLink,
        title: 'go to link',
    },
    {
        Element: PluridIconGrab,
        title: 'grab',
    },
    {
        Element: PluridIconHighlight,
        title: 'highlight',
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
        Element: PluridIconInvalid,
        title: 'invalid',
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
        Element: PluridIconNotViewable,
        title: 'not viewable',
    },
    {
        Element: PluridIconObliterate,
        title: 'obliterate',
    },
    {
        Element: PluridIconOpacity,
        title: 'opacity',
    },
    {
        Element: PluridIconPaintBrush,
        title: 'paint brush',
    },
    {
        Element: PluridIconPaintBucket,
        title: 'paint bucket',
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
        Element: PluridIconReset,
        title: 'reset',
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
        Element: PluridIconTag,
        title: 'tag',
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
        Element: PluridIconTransview,
        title: 'transview',
    },
    {
        Element: PluridIconUnlocked,
        title: 'unlocked',
    },
    {
        Element: PluridIconUpload,
        title: 'upload',
    },
    {
        Element: PluridIconUsers,
        title: 'users',
    },
    {
        Element: PluridIconValid,
        title: 'valid',
    },
    {
        Element: PluridIconViewable,
        title: 'viewable',
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
