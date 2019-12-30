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
            <PluridIconAdd
                theme={theme}
                title="add"
                size={iconSize}
            />
            <PluridIconAddAlbum
                theme={theme}
                title="add album"
                size={iconSize}
            />
            <PluridIconAddImage
                theme={theme}
                title="add image"
                size={iconSize}
            />
            <PluridIconAdminSpace
                theme={theme}
                title="admin space"
                size={iconSize}
            />
            <PluridIconCommand
                theme={theme}
                title="command"
                size={iconSize}
            />
            <PluridIconCopy
                theme={theme}
                title="copy"
                size={iconSize}
            />
            <PluridIconDelete
                theme={theme}
                title="delete"
                size={iconSize}
            />
            <PluridIconExplore
                theme={theme}
                title="explore"
                size={iconSize}
            />
            <PluridIconMore
                theme={theme}
                title="more"
                size={iconSize}
            />
            <PluridIconObliterate
                theme={theme}
                title="obliterate"
                size={iconSize}
            />
            <PluridIconSettings
                theme={theme}
                title="settings"
                size={iconSize}
            />
            <PluridIconSpeak
                theme={theme}
                title="speak"
                size={iconSize}
            />
            <PluridIconStatistics
                theme={theme}
                title="statistics"
                size={iconSize}
            />
            <PluridIconSystem
                theme={theme}
                title="system"
                size={iconSize}
            />
            <PluridIconUsers
                theme={theme}
                title="users"
                size={iconSize}
            />
        </IconSet>
    );
}


export default GeneralIcons;
