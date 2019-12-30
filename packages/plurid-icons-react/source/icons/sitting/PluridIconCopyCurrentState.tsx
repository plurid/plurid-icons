import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconCopyCurrentState: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M157.32,446.93q40.49,0,58.47-23.38t18-61.16V226.57q0-38.65,9.89-68.81A115.84,115.84,0,0,1,276.5,107q22.94-20.69,61.16-31.48t94.89-10.8h18v107H428.05q-40.47,0-54.41,18T359.7,245.46V365.08q0,46.79-12.6,79.15T296.74,500q37.77,23.4,50.36,55.76t12.6,79.16V754.54q0,37.77,13.94,55.76t54.41,18h22.49v107h-18q-56.67,0-94.89-10.8T276.5,893.05a115.82,115.82,0,0,1-32.83-50.82q-9.91-30.13-9.89-68.8V637.61q0-37.77-18-61.16t-58.47-23.38Z"/>
                <path d="M842.68,553.07q-40.48,0-58.47,23.38t-18,61.16V773.43q0,38.66-9.89,68.8a115.9,115.9,0,0,1-32.83,50.82q-22.93,20.69-61.16,31.48t-94.89,10.8h-18v-107H572q40.47,0,54.41-18t13.94-55.76V634.92q0-46.77,12.6-79.16T703.26,500q-37.77-23.38-50.36-55.77t-12.6-79.15V245.46q0-37.77-13.94-55.76t-54.41-18H549.46v-107h18q56.67,0,94.89,10.8T723.5,107a115.93,115.93,0,0,1,32.83,50.81q9.88,30.15,9.89,68.81V362.39q0,37.77,18,61.16t58.47,23.38Z"/>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconCopyCurrentState;
