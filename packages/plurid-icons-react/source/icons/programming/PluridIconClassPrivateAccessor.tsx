import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconClassPrivateAccessor: React.FC<PluridIconProperties> = (
    properties,
) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M911.82,589.9q.38,93.6.53,187.33c0,26.93-13.33,55-34.88,73.34a86.93,86.93,0,0,1-12.17,8.57c-30,17.39-59.58,34.47-89.12,51.53s-59.08,34.09-88.63,51.1c-23.31,13.42-41.52,6.85-46-16.37a59.32,59.32,0,0,1-.74-11q-.31-94.18-.58-188.4c0-8.91,2.38-13.06,10.19-17.59l29.2-16.86c.25-5.53.4-11,.65-16.42,2.44-52.73,41-119,85.37-149.79q4.77-3.3,9.5-6c46.47-26.83,89-12.34,96,40a164.88,164.88,0,0,1,1.22,21l28.38-16.38C909.71,578.77,911.79,579.89,911.82,589.9ZM723.49,686.25,834,622.44c-.27-8.42-.64-16.78-2.5-23.81-6.5-24.65-30.35-30.69-55-16.42-1.83,1-3.67,2.22-5.5,3.5-29,20.24-51.49,58.53-52.91,91.88-.15,3.67-.26,7.68-.33,11.9l5.74-3.24m68,79.16c9.93-15.15,10.86-32.49,2.52-39-4.58-3.54-11.16-2.92-17.78.9-5.46,3.15-10.94,8.48-15.33,15.43-9.61,15.2-11.18,33.6-1.93,38.51,5.3,2.78,6.37,8,5.92,15.65-.23,3.74,0,7.27,0,10.89,0,6.17,0,12.37,0,18.51.1,8.87,3.49,10.56,11.55,5.91S788,822,788,813.09c0-12.2.07-24.39-.15-36.43-.08-3.88.79-7,3.58-11.25"/>
                <polygon points="247.22 604.41 267.46 599.45 514.48 538.83 522.3 536.91 516.46 547.37 316.89 904.96 252.35 626.53 247.22 604.41"/>
                <polygon points="499.8 31.34 639.58 634.38 542.17 658.28 516.46 547.37 522.3 536.91 514.48 538.83 451.92 268.93 267.46 599.45 247.22 604.41 252.35 626.53 185.82 745.73 87.65 769.83 499.8 31.34"/>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconClassPrivateAccessor;
