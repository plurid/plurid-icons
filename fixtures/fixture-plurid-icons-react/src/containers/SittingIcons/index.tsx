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
            <PluridIconBranch
                theme={theme}
                title="branch"
                size={iconSize}
            />
            <PluridIconCopyCurrentState
                theme={theme}
                title="copy current state"
                size={iconSize}
            />
            <PluridIconCopyStateHistory
                theme={theme}
                title="copy state history"
                size={iconSize}
            />
            <PluridIconSittings
                theme={theme}
                title="sittings"
                size={iconSize}
            />
            <PluridIconStateShareImage
                theme={theme}
                title="state share image"
                size={iconSize}
            />
        </IconSet>
    );
}


export default SittingIcons;
