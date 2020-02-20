import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconClassProtectedMethod: React.FC<PluridIconProperties> = (
    properties,
) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            </svg>
        </PluridIcon>
    );
}


export default PluridIconClassProtectedMethod;
