import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconAddImage: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M736.68,75c50,0,97.22,19.67,132.94,55.38S925,213.31,925,263.32V736.68c0,50-19.67,97.22-55.38,132.94S786.69,925,736.68,925H263.32c-50,0-97.22-19.67-132.94-55.38S75,786.69,75,736.68V263.32c0-50,19.67-97.22,55.38-132.94S213.31,75,263.32,75H736.68m0-75H263.32C118.49,0,0,118.49,0,263.32V736.68C0,881.51,118.49,1000,263.32,1000H736.68C881.51,1000,1000,881.51,1000,736.68V263.32C1000,118.49,881.51,0,736.68,0Z"/>
                <circle cx="747" cy="253" r="78"/>
                <path d="M734.16,457.16H542.84V265.84A42.84,42.84,0,0,0,500,223h0a42.84,42.84,0,0,0-42.84,42.84V457.16H265.84A42.84,42.84,0,0,0,223,500h0a42.84,42.84,0,0,0,42.84,42.84H457.16V734.16A42.84,42.84,0,0,0,500,777h0a42.84,42.84,0,0,0,42.84-42.84V542.84H734.16A42.84,42.84,0,0,0,777,500h0A42.84,42.84,0,0,0,734.16,457.16Z"/>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconAddImage;
