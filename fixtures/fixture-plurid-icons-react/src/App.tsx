import React, { useState } from 'react';
import './App.css';

import ThemePicker from './components/ThemePicker';

import themes, { Theme } from '@plurid/plurid-themes';

import {
    PluridIconAdd,
    PluridIconMore,
} from '@plurid/plurid-icons-react';



const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>(themes.depict);

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
            </div>

            <div style={{ height: 140 }} />

            <div
                style={{
                    minHeight: '100vh',
                }}
            >
                <PluridIconAdd
                    theme={theme}
                    title="add"
                    size="normal"
                    // titleAppearTime={200}
                    // titleDisappearTime={200}
                />
                <PluridIconMore
                    theme={theme}
                    title="more"
                />
            </div>
        </div>
    );
}


export default App;
