import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PLURID_ICON_SIZES,
} from '../enumerations';



export interface PluridIconProperties {
    className?: string;
    style?: React.CSSProperties;

    /**
     * Size of the icon.
     *
     * `'small'` - 10px height and width.
     *
     * `'normal'` - 16px height and width.
     *
     * `'large'` - 24px height and width.
     *
     * `'number'` - pixel value specifying height and width.
     *
     * Default: `'normal'`.
     */
    size?: keyof typeof PLURID_ICON_SIZES | number;

    /**
     * Opacity of the icon.
     *
     * Default: `1`.
     */
    opacity?: number;

    color?: string;

    /**
     * Plurid Theme
     */
    theme?: Theme;

    /**
     * Title will be showed on prolonged hover (300ms).
     */
    title?: string;

    /**
     * Align title with the icon margins or center it.
     *
     * Default: `'center'`.
     */
    titlePosition?: 'left' | 'center' | 'right';

    /**
     * Location of the `title`.
     *
     * Default: `'under'`.
     */
    titleLocation?: 'under' | 'above' | 'left' | 'right';

    /**
     * Time value to show title after hover event.
     *
     * Default `600`ms.
     */
    titleAppearTime?: number;

    /**
     * Time value to hide title after hover event.
     *
     * Default `300`ms.
     */
    titleDisappearTime?: number;

    /**
     * Renders the icon as is (without cursor effects).
     */
    inactive?: boolean;

    atClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
