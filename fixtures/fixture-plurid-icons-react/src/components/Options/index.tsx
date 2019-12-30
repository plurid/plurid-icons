import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridDropdown,
} from '@plurid/plurid-ui-react';



interface OptionsProperties {
    theme: Theme;
    iconSize: any;
    setIconSize: any;
}

const Options: React.FC<OptionsProperties> = (properties) => {
    const {
        theme,
        iconSize,
        setIconSize,
    } = properties;

    return (
        <div
            style={{
                width: '100%',
                color: 'black',
                margin: 10,
                marginBottom: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    columnGap: '0.5rem',
                }}
            >
                <div>
                    icon size
                </div>

                <PluridDropdown
                    theme={theme}
                    selected={iconSize}
                    selectables={['small', 'normal', 'large']}
                    atSelect={(selection) => {
                        setIconSize(selection);
                    }}
                />
            </div>
        </div>
    );
}


export default Options;
