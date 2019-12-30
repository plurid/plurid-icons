import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconBranch,
    PluridIconCopyCurrentState,
    PluridIconCopyStateHistory,
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
}

const SittingIcons: React.FC<SittingIconsProperties> = (properties) => {
    const {
        theme,
        iconSize,
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
                    />
                );
            })}
        </IconSet>
    );
}


export default SittingIcons;
