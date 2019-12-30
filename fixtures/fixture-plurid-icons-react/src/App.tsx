import React, { useState } from 'react';
import './App.css';

import themes, { Theme } from '@plurid/plurid-themes';

import ThemePicker from './components/ThemePicker';



const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>(themes.depict);

    return (
        <div className="App"
            style={{
                color: theme.colorPrimary,
                // background: theme.backgroundColorPrimary,
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
            </div>

            <div style={{ height: 140 }} />

            <div>
                icons
            </div>
        </div>
    );
}


export default App;
