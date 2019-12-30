import {
    Theme,
} from '@plurid/plurid-themes';



export interface PluridIconProperties {
    /**
     * `'small'` - 10px height and width.
     *
     * `'normal'` - 15px height and width.
     *
     * `'large'` - 25px height and width.
     *
     * `'number'` - pixel value specifying height and width.
     */
    size?: 'small' | 'normal' | 'large' | number;

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
     * Default `300`ms.
     */
    titleHoverTime?: number;
}
