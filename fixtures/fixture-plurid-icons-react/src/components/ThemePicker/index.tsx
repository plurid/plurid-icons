import React from 'react';

import {
    StyledThemePicker,
} from './styled';

import {
    Theme,
} from '@plurid/plurid-themes';



interface ThemePickerProperties {
    theme: string,
    themes: any,
    setTheme: (theme: Theme) => void;
}

const ThemePicker: React.FC<ThemePickerProperties> = (properties) => {
    const {
        theme,
        themes,
        setTheme,
    } = properties;

    const themeNames = Object.keys(themes);

    return (
        <StyledThemePicker>
            <div
                style={{
                    textAlign: 'center',
                    margin: '0px auto',
                    userSelect: 'none',
                }}
            >
                <ul>
                    {themeNames.map((themeName: any) => {
                        return (
                            <li
                                style={{
                                    margin: '10px',
                                    cursor: 'pointer',
                                    padding: '5px 0',
                                    borderBottom: themeName === theme ? '2px solid black' : '',
                                }}
                                key={themeName}
                                onClick={() => setTheme((themes as any)[themeName])}
                            >
                                {themeName}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </StyledThemePicker>
    );
}


export default ThemePicker;
