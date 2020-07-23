import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconPaintBucket: React.FC<PluridIconProperties> = (properties) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M412.37,914c-24.09-.61-53.8-9.38-82.24-22.5-85.27-39.32-153.76-99.12-209.45-174C91.25,677.91,67,635.42,53.87,587.36c-6.81-25-11.15-50.62-2.78-75.81a97.91,97.91,0,0,1,19.3-33.62c17.93-20.07,37.91-38.3,56.68-57.65,2.3-2.37,4.14-7.53,3.17-10.37-25.53-75-5.8-140.55,43.2-198.7,44.08-52.32,101.08-82,169.66-88,22-1.93,43.56,1.33,64.49,8.12,5,1.62,8.25,1.32,11.65-2.78s7.95-7.52,11.38-11.74c21.94-27,51.2-33.46,83.89-30,43.68,4.67,82.82,22.12,119.82,44.51,92.2,55.79,164,131,212.69,227.46,13.94,27.61,24,56.64,27.19,87.68,3.35,32.72-4.48,60.41-29.74,84.18-43.21,40.67-84.34,83.56-126.33,125.53-76.49,76.47-153.21,152.69-229.25,229.6C469.46,905.48,446.89,914.32,412.37,914ZM747.54,540.7C589,479,480.63,371.05,420.24,212.39c-2.13,2.84-3.94,6-6.41,8.45q-72.07,72.24-144.24,144.41c-10,10-21.2,14.4-34.84,9.44-21.92-8-27.06-34.55-9.87-51.83q64.85-65.19,130-130.07c2.32-2.32,4.47-4.81,7.84-8.46-5.37,0-8.59-.3-11.73.06-8.92,1-17.89,1.83-26.68,3.57-52.36,10.37-95.58,35.21-123.69,81.81-46.86,77.68-9.23,182,78.8,216.24,71.42,27.81,140.67,22.85,205.87-19.66,16-10.42,34.29-7.58,44.24,6.68s6.38,33.73-9,43.82c-104.58,68.47-227,60.85-318.22-9.11-13.86-10.62-25.76-23.78-38.76-36-16.92,16.8-35,33.27-51,51.47-5.24,5.93-7.55,16.38-7.49,24.73.25,29.49,13,55.31,27.79,79.83C176.46,700.33,234.81,759.35,303,808.86c26,18.89,53.76,34.87,85.08,43.73,23.58,6.67,42.92,3.77,61.75-15.38,94.72-96.34,190.68-191.45,286.27-286.93C739.5,546.91,743.44,544.11,747.54,540.7ZM474.21,184.09c.38,14.8,7.67,33.61,16.69,51.75,29,58.27,71.18,106.37,118.16,150.49,38.24,35.92,79.14,68.48,128.07,88.9a149.38,149.38,0,0,0,42.41,11.14c27.3,2.67,41.05-10.3,37.62-37.24a181.8,181.8,0,0,0-16.38-54.69c-28.31-59-71.3-107-118.51-151.32-35.65-33.5-74-63.48-118.49-84.6-17.14-8.13-34.75-15-54.13-15.31C485.49,142.79,473.93,154.21,474.21,184.09Z" />
                <path d="M769.87,798c1.5-54.42,15.74-101.93,33.55-148.47,8.91-23.31,19.5-46,29.69-68.8,5.43-12.17,15.09-19.09,28.65-19.12s23.19,7.21,28.87,19c25.75,53.53,48.43,108.21,58.71,167.15,5,28.63,6.44,57.26-.93,85.9-15.81,61.5-91.58,86-143.6,48.94-21.63-15.4-30.17-38.35-33.43-63.65C770.32,810.72,770.17,802.35,769.87,798ZM863,669.89l-4-.33c-8.66,29.64-18.7,59-25.42,89.07-3.68,16.45-3.31,34.28-1.87,51.25a29.43,29.43,0,0,0,26.66,27.37c12.2,1.12,26.43-8.43,30.75-23.11,3.1-10.55,5-22.09,4.32-33C890.91,742.08,877.8,705.69,863,669.89Z" />
                <path d="M863,669.89c14.8,35.8,27.91,72.19,30.46,111.27.71,10.89-1.22,22.43-4.32,33-4.32,14.68-18.55,24.23-30.75,23.11a29.43,29.43,0,0,1-26.66-27.37c-1.44-17-1.81-34.8,1.87-51.25,6.72-30.08,16.76-59.43,25.42-89.07Z" />
            </svg>
        </PluridIcon>
    );
}


export default PluridIconPaintBucket;
