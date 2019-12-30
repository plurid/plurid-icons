import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridDropdown,
    PluridTextline,
} from '@plurid/plurid-ui-react';



interface OptionsProperties {
    theme: Theme;
    iconSize: any;
    setIconSize: any;
    titleAppearTime: number;
    setTitleAppearTime: any;
    titleDisappearTime: number;
    setTitleDisappearTime: any;
}

const Options: React.FC<OptionsProperties> = (properties) => {
    const {
        theme,
        iconSize,
        setIconSize,
        titleAppearTime,
        setTitleAppearTime,
        titleDisappearTime,
        setTitleDisappearTime,
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
                justifyContent: 'space-evenly',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    columnGap: '0.5rem',
                    alignItems: 'center',
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

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    columnGap: '0.5rem',
                    alignItems: 'center',
                }}
            >
                <div>
                    title appear time
                </div>

                <PluridTextline
                    theme={theme}
                    text={titleAppearTime + ''}
                    atChange={(event) => setTitleAppearTime(parseInt(event.target.value))}
                />
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    columnGap: '0.5rem',
                    alignItems: 'center',
                }}
            >
                <div>
                    title disappear time
                </div>

                <PluridTextline
                    theme={theme}
                    text={titleDisappearTime + ''}
                    atChange={(event) => setTitleDisappearTime(parseInt(event.target.value))}
                />
            </div>
        </div>
    );
}


export default Options;
