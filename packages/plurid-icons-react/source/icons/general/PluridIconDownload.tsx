import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconDownload: React.FC<PluridIconProperties> = (
    properties,
) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M509.21,691,270.62,385.79h11.23c48.9-.12,97.8-.51,146.7-.14,9.33.07,11-3.12,11-11.59q-.42-144.94-.22-289.9V69.79H572.87v9.57c0,98.39.17,196.78-.21,295.18,0,9.33,2.85,11,11.37,11,49.78-.38,99.57-.21,149.35-.23h10.37Z" />
                <path d="M509.21,691,270.62,385.79h11.23c48.9-.12,97.8-.51,146.7-.14,9.33.07,11-3.12,11-11.59q-.42-144.94-.22-289.9V69.79H572.87v9.57c0,98.39.17,196.78-.21,295.18,0,9.33,2.85,11,11.37,11,49.78-.38,99.57-.21,149.35-.23h10.37Z" />
                <polygon points="54.5 617.88 54.5 930.21 951.08 930.21 951.5 617.88 836.5 617.88 836.5 815.88 164.5 815.88 164.5 617.88 54.5 617.88" />
                <polygon points="54.5 617.88 54.5 930.21 951.08 930.21 951.5 617.88 836.5 617.88 836.5 815.88 164.5 815.88 164.5 617.88 54.5 617.88" />
            </svg>
        </PluridIcon>
    );
}


export default PluridIconDownload;
