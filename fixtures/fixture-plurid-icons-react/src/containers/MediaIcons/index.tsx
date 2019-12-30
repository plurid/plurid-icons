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

import {
    IconListItem,
} from '../../interfaces';



const icons: IconListItem[] = [
    {
        Element: PluridIconPause,
        title: 'pause',
    },
    {
        Element: PluridIconPlay,
        title: 'play',
    },
    {
        Element: PluridIconVolumeHigh,
        title: 'volume high',
    },
    {
        Element: PluridIconVolumeMiddle,
        title: 'volume middle',
    },
    {
        Element: PluridIconVolumeLow,
        title: 'volume low',
    },
    {
        Element: PluridIconVolumeMuted,
        title: 'volume muted',
    },
];


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


export default MediaIcons;
