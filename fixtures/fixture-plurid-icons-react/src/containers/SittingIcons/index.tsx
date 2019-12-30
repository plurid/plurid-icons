import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconBranch,
    PluridIconCopyCurrentState,
    PluridIconCopyStateHistory,
    PluridIconNewStateline,
    PluridIconSittings,
    PluridIconStateShareImage,
} from '@plurid/plurid-icons-react';

import IconSet from '../../components/IconSet';

import {
    IconListItem,
} from '../../interfaces';



const icons: IconListItem[] = [
    {
        Element: PluridIconBranch,
        title: 'branch',
    },
    {
        Element: PluridIconCopyCurrentState,
        title: 'copy current state',
    },
    {
        Element: PluridIconCopyStateHistory,
        title: 'copy state history',
    },
    {
        Element: PluridIconNewStateline,
        title: 'new stateline',
    },
    {
        Element: PluridIconSittings,
        title: 'sittings',
    },
    {
        Element: PluridIconStateShareImage,
        title: 'state share image',
    },
];


interface SittingIconsProperties {
    theme: Theme;
    iconSize: 'small' | 'normal' | 'large';
    titleAppearTime: number;
    titleDisappearTime: number;
}

const SittingIcons: React.FC<SittingIconsProperties> = (properties) => {
    const {
        theme,
        iconSize,
        titleAppearTime,
        titleDisappearTime,
    } = properties;

    return (
        <IconSet
            title="sitting icons"
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


export default SittingIcons;
