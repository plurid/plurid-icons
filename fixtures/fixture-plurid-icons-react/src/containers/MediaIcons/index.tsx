import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconPause,
    PluridIconPlay,
    PluridIconVolumeHigh,
    PluridIconVolumeLow,
    PluridIconVolumeMiddle,
    PluridIconVolumeMuted,
} from '@plurid/plurid-icons-react';

import IconSet from '../../components/IconSet';



interface MediaIconsProperties {
    theme: Theme;
    iconSize: 'small' | 'normal' | 'large';
}

const MediaIcons: React.FC<MediaIconsProperties> = (properties) => {
    const {
        theme,
        iconSize,
    } = properties;

    return (
        <IconSet
            title="media icons"
        >
            <PluridIconPause
                theme={theme}
                title="pause"
                size={iconSize}
            />
            <PluridIconPlay
                theme={theme}
                title="play"
                size={iconSize}
            />
            <PluridIconVolumeHigh
                theme={theme}
                title="volume high"
                size={iconSize}
            />
            <PluridIconVolumeLow
                theme={theme}
                title="volume low"
                size={iconSize}
            />
            <PluridIconVolumeMiddle
                theme={theme}
                title="volume middle"
                size={iconSize}
            />
            <PluridIconVolumeMuted
                theme={theme}
                title="volume muted"
                size={iconSize}
            />
        </IconSet>
    );
}


export default MediaIcons;
