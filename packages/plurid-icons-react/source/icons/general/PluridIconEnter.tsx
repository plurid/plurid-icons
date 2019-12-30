import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconEnter: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M814.37,86H329.63C227,86,143,170,143,272.63V407.75h94.63V272.63a92.57,92.57,0,0,1,92-92H814.37a92.57,92.57,0,0,1,92,92V757.37a92.57,92.57,0,0,1-92,92H329.63a92.57,92.57,0,0,1-92-92V623.3H143V757.37C143,860,227,944,329.63,944H814.37C917,944,1001,860,1001,757.37V272.63C1001,170,917,86,814.37,86Z"/>
                <polygon points="662 470 0.01 470 0.01 560 662 560 662 470 662 470"/>
                <g>
                    <polygon points="460 389.06 679 515.5 460 641.94 460 389.06"/>
                    <path d="M505,467l42,24.25,42,24.25-42,24.25L505,564V467M415,311.12V719.88L592,617.69,769,515.5,592,413.31,415,311.12Z"/>
                </g>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconEnter;
