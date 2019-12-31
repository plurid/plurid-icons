import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconPause: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M994,494.87v14.48c0,119.2-97,216.14-216.16,216.14H637s.17-27.49.17-84.38H777.84c72.67,0,131.79-59.1,131.79-131.77V494.86c0-72.68-59.13-131.79-131.79-131.79H533.28l29.78,75.4a6.36,6.36,0,0,1-9.79,7.38L397.28,326a6.36,6.36,0,0,1,0-10.09L553.27,196a6.23,6.23,0,0,1,3.88-1.33,6.35,6.35,0,0,1,5.91,8.69L533.3,278.72H777.84C897,278.7,994,375.68,994,494.87ZM446.74,554.13a6.37,6.37,0,0,0-9.79,7.38l29.78,75.41H222.16c-72.67,0-131.78-59.13-131.78-131.79V490.64c0-72.66,59.12-131.78,131.78-131.78H362.83c0-62.86.17-84.38.17-84.38H222.16C103,274.48,6,371.45,6,490.64v14.49c0,119.2,97,216.16,216.16,216.16H466.7l-29.77,75.4a6.35,6.35,0,0,0,5.92,8.7,6.19,6.19,0,0,0,3.88-1.33l156-119.9a6.35,6.35,0,0,0,0-10.1Z"/>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconPause;