import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconPrivateKey: React.FC<PluridIconProperties> = (
    properties,
) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M521.72,18.32c12.21,2.53,24.55,4.55,36.61,7.67,89.23,23,158.4,100.75,170.51,191.16,14.61,109.17-46,211.33-148.47,249-10.78,4-7.43,10.9-7.79,19,18.81,0,37.29-1.1,55.58.31s32.16-3.22,44.32-17.48c10.92-12.82,23.8-24.11,36.76-35a34.16,34.16,0,0,1,19-7.51c21.28-.93,42.63-.62,64-.19,7.09.14,10.9-1.51,13.91-8.67,9.76-23.24,33.89-38.15,57.33-36.72,25.72,1.58,47.67,18.62,55.1,42.8,9.33,30.32-7,62.84-37.12,73.8-29.66,10.8-63.67-3.8-75.3-33.42-3.29-8.38-7.52-10.25-15.71-10-18.16.59-36.37-.15-54.54.37a20,20,0,0,0-12.16,5c-16.52,15.84-32.66,32.08-48.64,48.47-5.39,5.53-11.16,8.17-19.05,8.07-26.9-.37-53.8-.15-81.37-.15V620.17H703.62c1.5-6.18,2.51-12.66,4.65-18.72,9.9-28,37.1-43.82,67-39.26,26,4,48.17,28.38,49.32,54.21,1.37,31-17.22,56.35-46.37,63.29-23.24,5.54-47.87-3.79-62.51-23.15-2.1-2.77-6.14-5.75-9.3-5.78-42.64-.38-85.28-.26-127.92-.23a31.35,31.35,0,0,0-4,.59V727c2.33.22,4.72.65,7.12.65,24.45,0,48.92.41,73.36-.17,9-.22,15.31,2.71,21.4,9,15.42,16,31.26,31.69,47.26,47.15,2.62,2.54,6.86,4.66,10.4,4.74,20.68.43,41.39-.16,62.06.37,7.37.19,7.74-4.82,9.51-9.21,9.63-24,32-38.28,58.56-37.17,24.89,1,46.22,17.21,53.3,40.42,9.67,31.68-6.62,65.58-37,76.94-30.58,11.43-63.45-3-76.53-34.28-2.55-6.09-5.8-7.54-11.82-7.46-22.26.32-44.53,0-66.78.27-7.1.1-12.5-1.9-17.51-7-15.74-16.17-31.66-32.2-48-47.75-3.41-3.24-8.93-5.84-13.55-5.95-24.11-.58-48.25-.27-73.9-.27v11.23c0,45.47.14,90.92-.22,136.39,0,4.86-1.71,11-4.94,14.36-20.45,21.15-41.55,41.66-62.43,62.4H493.5C472.84,961.25,452,941,431.73,920.12c-3.29-3.39-5.37-9.29-5.56-14.12-.66-16.91-.26-33.83-.26-51.93-3.66-.17-7-.45-10.24-.46-20.7,0-41.4.28-62.09-.17-6.93-.16-11.61,2.17-16.3,7-15.47,16-31.07,31.92-47.32,47.11a27.48,27.48,0,0,1-16.38,6.79c-22.23.79-44.52.68-66.77.17-7.09-.15-10.18,2-12.94,8.6-11,26.06-36.45,39.87-64.66,36C104,955.75,82.93,934.39,79.4,908.62,75.22,878,93.51,850.3,123.29,842c28.39-7.84,59.62,7.4,70.6,35.51,2.83,7.24,6.21,9.21,13.44,9,18.8-.45,37.64.28,56.43-.36a22.73,22.73,0,0,0,13.64-5.91c16.57-15.78,32.27-32.49,48.94-48.15a25.43,25.43,0,0,1,15.55-6.36c27.54-.62,55.11-.29,83.34-.29V733.62h-34c-29.79,0-59.58.09-89.36-.19-5.86,0-8.52,1.55-10.72,7.41-10,26.68-38.15,42.14-66.58,37.36-27-4.53-48.49-29-49.38-56.25-.95-29.21,17.8-54.52,45.43-61.34s57.23,6.91,68.57,33.25c3.72,8.65,8.13,10.48,16.64,10.38,35.12-.44,70.24-.16,105.36-.15h13.93V612.74h-42c-12.54,0-25.1-.41-37.62.14-8.83.38-15.42-2.32-21.6-8.79-15.6-16.31-31.64-32.21-47.95-47.81a20.08,20.08,0,0,0-12.18-5c-19.11-.52-38.25,0-57.37-.35-6.63-.15-9.59,2-12,8.43-10,26.45-35.48,41.47-63.31,38.22-26.16-3.05-48.22-24.84-51.65-51-3.88-29.66,13.12-56.84,41.18-65.82,27.85-8.91,58.49,3.2,71.22,30.32,4.78,10.19,10.16,12.46,20.25,12.09,20-.75,40.16-.82,60.18.11a30.65,30.65,0,0,1,18.06,7.49c16.76,15.56,32.39,32.34,48.92,48.17A21,21,0,0,0,352,584.43c23.51.52,47,.24,70.55.22a20.07,20.07,0,0,0,2.75-.49c.18-2.43.55-5.11.56-7.78,0-32.61-.27-65.23.16-97.83.1-7.28-2.55-10.07-9-12.65-77.62-31.23-127.38-87.38-145.11-169.32-22.7-104.92,32.34-211.89,130.14-257a221.12,221.12,0,0,1,68.26-19.5,39.26,39.26,0,0,0,6.25-1.76ZM500.37,453.09c109.79,0,201.23-91.58,201.69-202.07.46-111-91-202.81-202.36-203.07S296.52,138.64,296.23,250C295.94,360.09,389.35,453.07,500.37,453.09ZM496.18,944.2C510.77,931,524.46,919,537.5,906.43a18.57,18.57,0,0,0,4.9-12.13q.38-203.61.21-407.24v-7.7H455.72v44.45q0,185.76.15,371.5c0,3.7,1,8.4,3.34,10.93C471.78,919.78,484.94,932.77,496.18,944.2ZM793.82,621.3c0-16.54-14-30.71-30.44-30.71a30.23,30.23,0,0,0-30.6,29.86v.39c-.22,16.47,13.76,30.64,30.32,30.73S793.8,637.84,793.82,621.3Zm97.74-182.43A31.07,31.07,0,0,0,861.24,408c-16.53-.29-30.69,13.6-30.75,30.16,0,16,14.48,30.78,30.5,31a30.59,30.59,0,0,0,30.57-30.28ZM137.24,568.17c17.27-.06,30.52-13.09,30.56-30,0-15.68-15-30.71-30.73-30.65-16.53.06-30.33,14-30.33,30.6a30.11,30.11,0,0,0,30.16,30Zm97.31,182.46c17.25.29,30.75-12.54,31-29.49.26-15.9-14.25-30.86-30.23-31.15-16.55-.31-30.64,13.39-30.89,30A30.19,30.19,0,0,0,234.55,750.63ZM136.9,933.12c16.87.08,30.81-13.47,30.89-30,.08-16-14.61-30.51-30.83-30.57-15.7,0-30,14.19-30.16,30a30,30,0,0,0,29.42,30.57Zm724.85-99.26a29.9,29.9,0,0,0,29.68-30c0-16.31-14.54-31-30.44-30.89-15.74.13-30.8,15.52-30.5,31.16.31,16.51,14.4,29.89,31.26,29.74Z" />
                <path d="M499.12,92.45c37.34-.29,68.72,31,69,68.67.24,37.5-30.65,68.75-68.45,69.22-37.33.47-69-30.67-69.43-68.23C429.78,124,460.72,92.76,499.12,92.45Zm0,29.49c-21.44,0-39.57,18.26-39.4,39.66s18.59,39.53,39.89,39.2c21-.32,38.83-18.24,39-39.23.11-21.31-18.15-39.66-39.5-39.63Z" />
            </svg>
        </PluridIcon>
    );
}


export default PluridIconPrivateKey;
