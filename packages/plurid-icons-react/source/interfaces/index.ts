import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    ICON_SIZES,
} from '../enumerations';



export interface PluridIconProperties {
    style?: React.CSSProperties;

    /**
     * `'small'` - 10px height and width.
     *
     * `'normal'` - 16px height and width.
     *
     * `'large'` - 24px height and width.
     *
     * `'number'` - pixel value specifying height and width.
     */
    size?: keyof typeof ICON_SIZES | number;

    /**
     * Plurid Theme
     */
    theme?: Theme;

    /**
     * Title will be showed on prolonged hover (300ms).
     */
    title?: string;

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
}
