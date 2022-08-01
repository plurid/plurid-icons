// #region imports
    // #region external
    import {
        PLURID_ICON_SIZES_VALUES,
    } from '../constants';

    import {
        PLURID_ICON_SIZES,
    } from '../enumerations';
    // #endregion external
// #endregion imports



// #region module
export const handleSize = (
    size: number | 'small' | 'normal' | 'large' | undefined,
) => {
    if (!size) {
        return PLURID_ICON_SIZES_VALUES.normal;
    }

    if (typeof size === 'number') {
        return size;
    }

    switch (size) {
        case PLURID_ICON_SIZES.small:
            return PLURID_ICON_SIZES_VALUES.small;
        case PLURID_ICON_SIZES.normal:
            return PLURID_ICON_SIZES_VALUES.normal;
        case PLURID_ICON_SIZES.large:
            return PLURID_ICON_SIZES_VALUES.large;
        default:
            return PLURID_ICON_SIZES_VALUES.normal;
    }
}
// #endregion module
