import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconRevert: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path
                    d='M770.1,447.66H756c-25,0-50.08.06-75.12-.1-12.77-.08-22.75,4.83-28.35,16.35-5.51,11.35-3.87,22.41,3.64,32.68Q683,533.24,709.55,570,753,629.89,796.42,689.76c17.29,23.75,38.91,23.61,56.2-.16q70.2-96.52,140.48-193c7.56-10.36,9.09-21.28,3.68-32.62-5.29-11.09-14.69-16.38-27.11-16.35-28,.06-56.06,0-84.09,0h-13c-5-22.32-8.14-43.83-14.52-64.35C803.85,208.56,687.23,100.53,506.86,69.61,279.11,30.57,65.16,176.16,11.7,400.78c-56.1,235.7,95.24,475.36,333.19,526.06,29.72,6.34,60.61,8.12,91.08,9.79,28.7,1.57,50.73-20.16,51.55-47.67.84-28.1-20.23-50.41-49.45-51.14-103.46-2.6-191.22-40.55-257.45-120.43C99.45,619.51,77.8,507.45,120.44,387.67c42.44-119.19,129-193.66,253.45-218,179.19-35,348.84,76,391.41,252.71C767.12,430,768.22,437.66,770.1,447.66Z'
                />
                <path
                    d='M437.15,462.06,389.38,414c-7.82-7.87-16.94-12.32-28.24-9.87-11,2.37-19.26,8.69-22.52,19.59-3.42,11.44-1.45,22.22,7.42,31,16.16,16,32.35,32,49.62,49C383.42,516,372,527.58,360.55,539.1c-4.74,4.77-9.65,9.37-14.26,14.26-12.15,12.91-12.21,31.67-.28,43.15,11.72,11.28,29.81,11,42.29-1.1,14.73-14.3,29.09-29,43.63-43.49,1.56-1.56,3.29-3,6.55-5.85,9.13,9.49,18,19,27.09,28.12,32.24,32.38,47.9,37.76,63.64,22.1,16.22-16.16,11-31.53-22-64.5-8.93-8.91-18-17.67-28.69-28.13,16.8-16.26,32.78-31.31,48.19-46.91a41.57,41.57,0,0,0,10-15.71c4.14-12.9-1.51-26.12-12.62-33-11.92-7.37-25.29-6.36-36.06,3.85-14.08,13.36-27.55,27.36-41.31,41.06C443.83,455.8,440.85,458.54,437.15,462.06Z'
                />
            </svg>
        </PluridIcon>
    );
}


export default PluridIconRevert;