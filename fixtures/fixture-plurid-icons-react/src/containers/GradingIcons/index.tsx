import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconMean,
    PluridIconMedian,
    PluridIconMode,
    PluridIconRange,
} from '@plurid/plurid-icons-react';

import IconSet from '../../components/IconSet';

import {
    IconListItem,
} from '../../interfaces';



const icons: IconListItem[] = [
    {
        Element: PluridIconMean,
        title: 'mean',
    },
    {
        Element: PluridIconMedian,
        title: 'median',
    },
    {
        Element: PluridIconMode,
        title: 'mode',
    },
    {
        Element: PluridIconRange,
        title: 'range',
    },
];


interface GradingIconsProperties {
    theme: Theme;
    iconSize: 'small' | 'normal' | 'large';
}

const GradingIcons: React.FC<GradingIconsProperties> = (properties) => {
    const {
        theme,
        iconSize,
    } = properties;

    return (
        <IconSet
            title="grading icons"
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


export default GradingIcons;
