import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconVolumeMiddle: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M12.34,347.57c40,.19,80,.06,120,.79,11.38.2,20.31-2.7,29.53-9.63q122.87-92.44,246.5-183.88a122.79,122.79,0,0,1,29.13-15.43c9.28-3.54,14.51.85,15.49,10.68.38,3.78.34,7.61.34,11.42q0,335.75,0,671.5c0,2.22,0,4.44,0,6.66-.61,20-8.58,25-26.82,16A122.42,122.42,0,0,1,408,844.06Q282.08,750.9,156.19,657.71a29.71,29.71,0,0,0-16.28-5.56c-42.52-.26-85,.14-127.57.33Z"/>
                <path d="M757.21,495.91c-1.8-97.1-36-184.76-104.39-259-7.06-7.66-13.91-17-16.75-26.73-4.36-15,4.12-29.39,17.7-36.43,13.75-7.11,30-5.3,40.85,7.25,20.1,23.24,41.13,46.12,57.94,71.66,59,89.67,82.56,188.83,71.17,295.46C812.57,652.64,769.5,742.75,696,818.08c-14.74,15.1-36,16.08-50.25,2.72s-14.57-35,0-50.22c31.42-32.83,57.31-69.21,76.24-110.73C745.3,608.78,756.31,555.26,757.21,495.91Z"/>
                <path d="M687,505.78c-1.4,74.71-29.73,144-85.28,202.1-13.8,14.43-34.5,15.71-48.78,3.22-14.61-12.77-16.29-34.11-2.56-49.31,19.26-21.33,37-43.65,47.82-70.48q52.36-129.49-34.47-239.2c-4.53-5.7-9.85-10.78-14.42-16.46-12.22-15.17-10.65-35.21,3.52-47.85,13.79-12.29,33.83-12,47.31,1.56a294.81,294.81,0,0,1,65.66,99.33C680,424.41,686.91,461.67,687,505.78Z"/>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconVolumeMiddle;
