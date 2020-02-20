import React, {
    useState,
} from 'react';
import './App.css';

import ThemePicker from './components/ThemePicker';
import Options from './components/Options';

import GeneralIcons from './containers/GeneralIcons';
import GradingIcons from './containers/GradingIcons';
import MediaIcons from './containers/MediaIcons';
import PluridSpecificIcons from './containers/PluridSpecificIcons';
import ProgrammingIcons from './containers/ProgrammingIcons';
import SittingIcons from './containers/SittingIcons';

import githubLogo from './assets/icons/github-logo.png';

import themes, { Theme } from '@plurid/plurid-themes';



const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>(themes.depict);
    const [iconSize, setIconSize] = useState<'small' | 'normal' | 'large'>('normal');
    const [titleAppearTime, setTitleAppearTime] = useState(600);
    const [titleDisappearTime, setTitleDisappearTime] = useState(300);

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
                    zIndex: 9999,
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
                    titleAppearTime={titleAppearTime}
                    setTitleAppearTime={setTitleAppearTime}
                    titleDisappearTime={titleDisappearTime}
                    setTitleDisappearTime={setTitleDisappearTime}
                />
            </div>

            <div style={{ height: 230 }} />

            <h1>
                plurid' icons
                <a
                    href="https://github.com/plurid/plurid-icons"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={githubLogo}
                        alt="github"
                        height={25}
                        style={{
                            marginLeft: 15,
                            filter: `invert(${theme.type === 'dark' ? 1 : 0})`,
                        }}
                    />
                </a>
            </h1>

            <div
            >
                <GeneralIcons
                    theme={theme}
                    iconSize={iconSize}
                    titleAppearTime={titleAppearTime}
                    titleDisappearTime={titleDisappearTime}
                />

                <GradingIcons
                    theme={theme}
                    iconSize={iconSize}
                    titleAppearTime={titleAppearTime}
                    titleDisappearTime={titleDisappearTime}
                />

                <MediaIcons
                    theme={theme}
                    iconSize={iconSize}
                    titleAppearTime={titleAppearTime}
                    titleDisappearTime={titleDisappearTime}
                />

                <PluridSpecificIcons
                    theme={theme}
                    iconSize={iconSize}
                    titleAppearTime={titleAppearTime}
                    titleDisappearTime={titleDisappearTime}
                />

                <ProgrammingIcons
                    theme={theme}
                    iconSize={iconSize}
                    titleAppearTime={titleAppearTime}
                    titleDisappearTime={titleDisappearTime}
                />

                <SittingIcons
                    theme={theme}
                    iconSize={iconSize}
                    titleAppearTime={titleAppearTime}
                    titleDisappearTime={titleDisappearTime}
                />
            </div>
        </div>
    );
}


export default App;
