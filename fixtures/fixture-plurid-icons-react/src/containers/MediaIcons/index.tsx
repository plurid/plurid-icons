import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconLoop,
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
        Element: PluridIconLoop,
        title: 'loop',
    },
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
    titleAppearTime: number;
    titleDisappearTime: number;
}

const MediaIcons: React.FC<MediaIconsProperties> = (properties) => {
    const {
        theme,
        iconSize,
        titleAppearTime,
        titleDisappearTime,
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
                        titleAppearTime={titleAppearTime}
                        titleDisappearTime={titleDisappearTime}
                    />
                );
            })}
        </IconSet>
    );
}


export default MediaIcons;
