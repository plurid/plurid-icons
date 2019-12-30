import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridSwitch,
} from '@plurid/plurid-ui-react';



interface OptionsProperties {
    theme: Theme;
    iconSize: any;
    setIconSize: any;
}

const Options: React.FC<OptionsProperties> = (properties) => {
    const {
        theme,
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
            <PluridSwitch
                theme={theme}
                checked={false}
                atChange={() => {}}
                exclusive={true}
            />

            <div
                style={{
                    userSelect: 'none',
                    cursor: 'pointer',
                    margin: '0 1rem',
                }}
                onClick={() => {}}
            >
                foo
            </div>
        </div>
    );
}


export default Options;
