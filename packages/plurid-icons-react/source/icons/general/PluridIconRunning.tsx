import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconRunning: React.FC<PluridIconProperties> = (
    properties,
) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M500.57,39C246.27,38.65,38.59,246.4,39,500.68,39.48,755.14,245.89,961.1,500.37,961c254.72-.1,460.56-206,460.6-460.73C961,245.79,755,39.36,500.57,39ZM331.4,733.83H194l48.32-48.32c-89.54-124.08-78.48-298.31,33.22-410,104.89-104.9,264.93-121,386.81-48.46l-43.08,43.09q-10.62-5.53-21.78-10.06a259,259,0,0,0-240.51,24.27c-119.19,79.11-151.68,239.88-72.56,359.07l47-47Zm393.1-9.33C618.76,830.23,457,845.81,334.78,771.21l42.93-42.93a258.94,258.94,0,0,0,268.64-14.54c118-80.78,148.16-241.92,67.38-359.91l-47.46,47.46V263.85H803.71l-48,47.95C847.43,436.06,837,612,724.5,724.5Z" />
            </svg>
        </PluridIcon>
    );
}


export default PluridIconRunning;
