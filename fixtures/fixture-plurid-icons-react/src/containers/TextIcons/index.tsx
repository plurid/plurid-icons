import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconBold,
    PluridIconFontSize,
    PluridIconItalic,
    PluridIconLetterSpacing,
    PluridIconText,
    PluridIconWordSpacing,
} from '@plurid/plurid-icons-react';

import IconSet from '../../components/IconSet';

import {
    IconListItem,
} from '../../interfaces';



const icons: IconListItem[] = [
    {
        Element: PluridIconBold,
        title: 'bold',
    },
    {
        Element: PluridIconFontSize,
        title: 'font size',
    },
    {
        Element: PluridIconItalic,
        title: 'italic',
    },
    {
        Element: PluridIconLetterSpacing,
        title: 'letter spacing',
    },
    {
        Element: PluridIconText,
        title: 'text',
    },
    {
        Element: PluridIconWordSpacing,
        title: 'word spacing',
    },
];


export interface TextIconsProperties {
    theme: Theme;
    iconSize: 'small' | 'normal' | 'large';
    titleAppearTime: number;
    titleDisappearTime: number;
}

const TextIcons: React.FC<TextIconsProperties> = (
    properties,
) => {
    const {
        theme,
        iconSize,
        titleAppearTime,
        titleDisappearTime,
    } = properties;

    return (
        <IconSet
            title="text icons"
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


export default TextIcons;
