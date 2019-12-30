import React, { useState } from 'react';
import './App.css';

import ThemePicker from './components/ThemePicker';

import themes, { Theme } from '@plurid/plurid-themes';

import {
    PluridIconAdd,
    PluridIconMore,

    PluridIconDocuments,
    PluridIconFirstPerson,
    PluridIconGlobal,
    PluridIconRotate,
    PluridIconScale,
    PluridIconTranslate
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
                <div
                    style={{
                        marginBottom: '4rem',
                    }}
                >
                    <h2>
                        general icons
                    </h2>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <PluridIconAdd
                            theme={theme}
                            title="add"
                        />
                        <PluridIconMore
                            theme={theme}
                            title="more"
                        />
                    </div>
                </div>

                <div
                    style={{
                        marginBottom: '4rem',
                    }}
                >
                    <h2>
                        plurid' specific icons
                    </h2>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <PluridIconDocuments
                            theme={theme}
                            title="documents"
                        />
                        <PluridIconFirstPerson
                            theme={theme}
                            title="first person"
                        />
                        <PluridIconGlobal
                            theme={theme}
                            title="global"
                        />
                        <PluridIconRotate
                            theme={theme}
                            title="rotate"
                        />
                        <PluridIconScale
                            theme={theme}
                            title="scale"
                        />
                        <PluridIconTranslate
                            theme={theme}
                            title="translate"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
