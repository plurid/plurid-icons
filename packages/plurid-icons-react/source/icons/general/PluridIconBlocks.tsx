import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconBlocks: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M443.6,5.05c.32,5,.78,8.74.78,12.52q.06,205.05,0,410.08c0,16.7-.1,16.8-16.89,16.8q-205,0-410.08,0c-3.78,0-7.56-.47-12.47-.8,0-32.5,0-64.21,0-95.92q0-113.47,0-227C5.06,51.85,51.85,5.08,120.79,5.06q154.09,0,308.2,0ZM363.17,86.7H349.41q-114.69,0-229.4,0c-23.44,0-33.32,10.14-33.33,34.05q-.06,114.06,0,228.11c0,4.49.52,9,.85,14.32h14.32c82.48,0,165-.3,247.44.22,11.93.07,14.06-4,14-14.79-.39-82.05-.18-164.1-.15-246.15Z"/>
                <path d="M556,5h98.65q112.83,0,225.66.07C947,5.13,994.5,51.92,994.64,118.27q.35,157.34.07,314.65c0,3.34-.41,6.67-.68,10.76-4.3.29-8.08.75-11.86.75q-205,.07-410.07,0c-16.71,0-16.78-.08-16.78-16.91q0-203.74,0-407.49C555.35,15.43,555.75,10.79,556,5ZM912.27,363.13c.32-5.41.74-9.18.74-12.94q.06-115.38,0-230.77c0-22.85-10.08-32.63-33.3-32.65q-114.74-.09-229.47,0c-4.15,0-8.29.47-12.87.74-.33,3.06-.76,5.13-.76,7.2,0,85.94.12,171.89-.26,257.83-.05,11.53,6.37,10.75,14,10.74q107-.17,214-.11Z"/>
                <path d="M5,556.08c5.46-.28,9.68-.7,13.9-.7,136.69,0,273.38.14,410.07-.31,12.64,0,15.74,3.71,15.71,15.95-.41,137.12-.26,274.24-.3,411.36,0,3.77-.5,7.55-.83,12.35H394c-91.12,0-182.25.16-273.38,0C51.45,994.57,5.06,948,5,878.91Q5,724.82,5,570.71Zm358.15,357V896.27c0-81.65-.27-163.3.25-244.94.08-12.06-3.52-15.07-15.2-15-82.51.47-165,.24-247.52.28-4.18,0-8.36.43-13.37.7-.25,5-.64,9.17-.64,13.34q0,114.74,0,229.48c0,22.89,10,32.88,33,32.92,46,.09,92,0,137.94,0Z"/>
                <path d="M1000,575.92q0,154.1,0,308.19c0,69-46.42,115.66-115.62,115.8-91.13.18-182.25,0-273.38,0H561.44c-.34-4.81-.83-8.58-.83-12.36-.05-137.12.1-274.24-.3-411.36,0-12.23,3.06-16,15.71-16,136.68.46,273.37.28,410.06.32,4.22,0,8.44.41,13.91.7ZM747.3,918.25c46,0,92,.09,137.94,0,23,0,33-10,33-32.93q.11-114.74,0-229.47c0-4.18-.38-8.36-.63-13.35-5-.27-9.19-.69-13.37-.7-82.51,0-165,.19-247.52-.27-11.68-.07-15.29,2.94-15.21,15,.52,81.65.26,163.3.25,244.94v16.78Z"/>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconBlocks;