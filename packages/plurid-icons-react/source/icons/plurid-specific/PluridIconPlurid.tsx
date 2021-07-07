import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconPlurid: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path class="cls-1" d="M183.34,713.4v288.12H53.66v-8.27q0-471.68-.16-943.34c0-6.79,1.76-9.66,8.6-10.93C115,29.19,167.44,16.41,220.68,9.64c70.63-9,142-12,212,6C562,49,643.74,131.7,676.56,260.26c27.23,106.66,21.7,213-21.4,315-40.55,96-112.22,157.86-215.27,179-88.05,18-172.49,5.66-251.62-38.28C187.13,715.33,186,714.75,183.34,713.4Zm-.08-350.67c0,73,.11,145.92-.18,218.88,0,7.22,2.15,11.7,8,15.62,52.58,35,110,53.08,173.5,49.28,83.9-5,140.72-47.37,170.69-125.71,11.16-29.18,16.33-59.75,19.13-90.72,4.52-50,3.12-99.73-10.48-148.37C524.58,212.44,483.41,161.8,415.45,135a215.16,215.16,0,0,0-73-14.57c-49.66-1.5-99.15.12-148,10.49-8.19,1.74-11.51,4.5-11.45,13.77C183.47,217.34,183.26,290,183.26,362.73Z"/>
                <path class="cls-1" d="M947.5,2.6V380.22H816.36V2.6Z"/>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconPlurid;
