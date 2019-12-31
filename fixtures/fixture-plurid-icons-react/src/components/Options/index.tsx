import React from 'react';

import {
    StyledOptions,
} from './styled';

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
        <StyledOptions>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    columnGap: '0.5rem',
                    alignItems: 'center',
                    marginBottom: '10px',
                }}
            >
                <div>
                    icon size
                </div>

                <PluridDropdown
                    theme={theme}
                    selected={iconSize}
                    selectedColor={theme.backgroundColorDark}
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
                    marginBottom: '10px',
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
        </StyledOptions>
    );
}


export default Options;
