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
     * `'small'` - 10px height and width.
     *
     * `'normal'` - 16px height and width.
     *
     * `'large'` - 24px height and width.
     *
     * `'number'` - pixel value specifying height and width.
     */
    size?: keyof typeof PLURID_ICON_SIZES | number;

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

    /**
     * Renders the icon as is (without cursor effects).
     */
    inactive?: boolean;

    atClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
