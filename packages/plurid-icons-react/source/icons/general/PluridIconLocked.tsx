import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconLocked: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M249.71,418.13c-26.67,0-51.24,0-75.82,0-20.25.05-26.53,6.29-26.53,26.41q0,212.87.13,425.73c0,8.58.15,17.33,1.81,25.7,11.53,58.28,58.68,96.79,119.21,96.88q230.1.33,460.19,0a144.56,144.56,0,0,0,32.89-3.49c56-13.23,90.87-59.21,90.95-120q.29-211.64,0-423.28c0-22.61-5.38-27.85-28.67-27.86q-230.1-.06-460.19-.05H349.22V418H249.71ZM460.1,594.32c25.31-22,64.35-19.17,85.94,6.3s19.05,63.37-6.81,84.61c-7.26,6-9.53,11.85-9.37,20.71.48,27.45.32,54.91.13,82.37-.13,20-9.09,28.11-30.17,28.13-20.92,0-29.68-8.23-29.88-28.37-.13-13.93,0-27.87,0-41.8,0-8.19-.51-16.43.1-24.58,1.25-16.69-1.5-29.81-15.21-43C430.88,655.58,435.08,616.11,460.1,594.32Z"/>
                <path d="M349.22,573c0-51.65-2.16-131.66.51-181.41,3.93-73.37,62.55-130.44,137.82-138.36,69-7.25,138.93,39.17,156.85,108,6.79,26.07,5.72,54.3,7.27,81.6,1.58,27.95,20.83,48.48,47.9,49.5a48.34,48.34,0,0,0,50.13-47c.8-25.34,1-51.08-2.53-76.1-18.94-135.72-143.33-227-273.27-214-115.32,11.53-215.67,110.94-222.39,226.7-2.82,48.66-1.34,97.56-1.8,146.35,0,4.67,0,39.35,0,44.72Z"/>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconLocked;
