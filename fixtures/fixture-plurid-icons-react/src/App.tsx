import React, { useState } from 'react';
import './App.css';

import ThemePicker from './components/ThemePicker';

import themes, { Theme } from '@plurid/plurid-themes';

import {
    PluridIconAdd,
    PluridIconAddAlbum,
    PluridIconAddImage,
    PluridIconCommand,
    PluridIconCopy,
    PluridIconDelete,
    PluridIconExplore,
    PluridIconMore,
    PluridIconObliterate,
    PluridIconSettings,
    PluridIconSpeak,
    PluridIconStatistics,
    PluridIconSystem,
    PluridIconUsers,

    PluridIconPause,
    PluridIconPlay,
    PluridIconVolumeHigh,
    PluridIconVolumeLow,
    PluridIconVolumeMiddle,
    PluridIconVolumeMuted,

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
                        <PluridIconAddAlbum
                            theme={theme}
                            title="add album"
                        />
                        <PluridIconAddImage
                            theme={theme}
                            title="add image"
                        />
                        <PluridIconCommand
                            theme={theme}
                            title="command"
                        />
                        <PluridIconCopy
                            theme={theme}
                            title="copy"
                        />
                        <PluridIconDelete
                            theme={theme}
                            title="delete"
                        />
                        <PluridIconExplore
                            theme={theme}
                            title="explore"
                        />
                        <PluridIconMore
                            theme={theme}
                            title="more"
                        />
                        <PluridIconObliterate
                            theme={theme}
                            title="obliterate"
                        />
                        <PluridIconSettings
                            theme={theme}
                            title="settings"
                        />
                        <PluridIconSpeak
                            theme={theme}
                            title="speak"
                        />
                        <PluridIconStatistics
                            theme={theme}
                            title="statistics"
                        />
                        <PluridIconSystem
                            theme={theme}
                            title="system"
                        />
                        <PluridIconUsers
                            theme={theme}
                            title="users"
                        />
                    </div>
                </div>

                <div
                    style={{
                        marginBottom: '4rem',
                    }}
                >
                    <h2>
                        media icons
                    </h2>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <PluridIconPause
                            theme={theme}
                            title="pause"
                        />
                        <PluridIconPlay
                            theme={theme}
                            title="play"
                        />
                        <PluridIconVolumeHigh
                            theme={theme}
                            title="volume high"
                        />
                        <PluridIconVolumeLow
                            theme={theme}
                            title="volume low"
                        />
                        <PluridIconVolumeMiddle
                            theme={theme}
                            title="volume middle"
                        />
                        <PluridIconVolumeMuted
                            theme={theme}
                            title="volume muted"
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
