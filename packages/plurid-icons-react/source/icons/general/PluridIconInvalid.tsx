import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconInvalid: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M500.57,39C246.27,38.65,38.59,246.4,39,500.68,39.48,755.14,245.89,961.1,500.37,961c254.72-.1,460.56-206,460.6-460.73C961,245.79,755,39.36,500.57,39ZM661.93,616.67a32,32,0,0,1,0,45.26h0a32,32,0,0,1-45.26,0L500,545.25,383.33,661.93a32,32,0,0,1-45.26,0h0a32,32,0,0,1,0-45.26L454.75,500,338.07,383.33a32,32,0,0,1,0-45.26h0a32,32,0,0,1,45.26,0L500,454.75,616.67,338.07a32,32,0,0,1,45.26,0h0a32,32,0,0,1,0,45.26L545.25,500Z" />
            </svg>
        </PluridIcon>
    );
}


export default PluridIconInvalid;
