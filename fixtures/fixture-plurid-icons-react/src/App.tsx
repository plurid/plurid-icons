import React, {
    useState,
} from 'react';
import './App.css';

import ThemePicker from './components/ThemePicker';
import Options from './components/Options';

import GeneralIcons from './containers/GeneralIcons';
import MediaIcons from './containers/MediaIcons';
import PluridSpecificIcons from './containers/PluridSpecificIcons';
import SittingIcons from './containers/SittingIcons';

import themes, { Theme } from '@plurid/plurid-themes';



const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>(themes.depict);
    const [iconSize, setIconSize] = useState<'small' | 'normal' | 'large'>('normal');

    return (
        <div className="App"
            style={{
                color: theme.colorPrimary,
                background: theme.backgroundColorPrimary,
            }}
        >
            <div
                style={{
                    position: 'fixed',
                    width: '100%',
                    background: 'white',
                    boxShadow: theme.boxShadowUmbra,
                }}
            >
                <ThemePicker
                    theme={theme.name}
                    themes={themes}
                    setTheme={setTheme}
                />

                <Options
                    theme={theme}
                    iconSize={iconSize}
                    setIconSize={setIconSize}
                />
            </div>

            <div style={{ height: 140 }} />

            <div
                style={{
                    minHeight: '100vh',
                }}
            >
                <GeneralIcons
                    theme={theme}
                    iconSize={iconSize}
                />

                <MediaIcons
                    theme={theme}
                    iconSize={iconSize}
                />

                <PluridSpecificIcons
                    theme={theme}
                    iconSize={iconSize}
                />

                <SittingIcons
                    theme={theme}
                    iconSize={iconSize}
                />
            </div>
        </div>
    );
}


export default App;
