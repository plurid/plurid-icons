import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconCircle,
    PluridIconRectangle,
    PluridIconSquare,
} from '@plurid/plurid-icons-react';

import IconSet from '../../components/IconSet';

import {
    IconListItem,
} from '../../interfaces';



const icons: IconListItem[] = [
    {
        Element: PluridIconCircle as any,
        title: 'circle',
    },
    {
        Element: PluridIconRectangle as any,
        title: 'rectangle',
    },
    {
        Element: PluridIconSquare as any,
        title: 'square',
    },
];


interface ShapesIconsProperties {
    theme: Theme;
    iconSize: 'small' | 'normal' | 'large';
    titleAppearTime: number;
    titleDisappearTime: number;
}

const ShapesIcons: React.FC<ShapesIconsProperties> = (
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
            title="shapes icons"
        >
            {icons.map(icon => {
                const {
                    Element,
                    title,
                } = icon;

                const ElementAny: any = Element;

                return (
                    <ElementAny
                        key={title}
                        theme={theme}
                        title={title}
                        size={iconSize}
                        titleAppearTime={titleAppearTime}
                        titleDisappearTime={titleDisappearTime}
                        fill={true}
                    />
                );
            })}
        </IconSet>
    );
}


export default ShapesIcons;
