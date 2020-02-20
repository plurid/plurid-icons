import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconTypeAlias: React.FC<PluridIconProperties> = (
    properties,
) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M945.52,539q15.59,9,2.18,16.78-.69.41-168.59,70.63-16.2,7-23.26,6.27t-21.32-8.92q-17.73-10.24-4.31-18,3.43-2,53.83-23.64t79.27-36.42q-16.3-15-63-42.35l-77.88-45L228.16,630.26l68.23,39.4q17,9.78,4.25,17.19c-3.66,2.13-10,4.42-19.09,6.88s-16.15,3-21.21,1.69c-2.77-.53-6.33-2.07-10.73-4.6L57.53,579.92q-19.05-11-6.33-18.39Q56,558.74,68.57,555T90.13,553a45.48,45.48,0,0,1,12.44,4.8L175.66,600,669.92,428.07,611.7,394.46q-63.76-36-80.54-42.32t-37.1-1.71q-33.4,7.76-62.17,15.44t-43,12.17q-14.3,4.5-26.5,8t-18.08,4.08a38.68,38.68,0,0,1-11.74-.6,43.75,43.75,0,0,1-12.79-5.2l-3.81-2.21q-18.39-10.6-6.56-17.47,2.06-1.19,198.49-57.57,23.07-7,38.32,1.41Z"/>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconTypeAlias;
