import React from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconAccessor: React.FC<PluridIconProperties> = (
    properties,
) => {
    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <defs>
                    <style>
                        {`
                            .cls-1 {
                                isolation: isolate;
                            }

                            .cls-2 {
                                fill: #aaa;
                            }

                            .cls-3 {
                                fill: #fefefe;
                            }

                            .cls-4 {
                                fill: #b6b6b6;
                            }

                            .cls-5 {
                                fill: #8c8c8c;
                            }
                        `}
                    </style>
                </defs>

                <g className="cls-1">
                    <polygon className="cls-2" points="697.12 693.35 661.88 672.87 636.17 561.96 671.41 582.43 697.12 693.35"/>
                    <polygon className="cls-3" points="671.41 582.43 636.17 561.96 642.01 551.5 677.25 571.98 671.41 582.43"/>
                    <polygon className="cls-4" points="669.43 573.9 634.19 553.42 642.01 551.5 677.25 571.98 669.43 573.9"/>
                    <polygon className="cls-2" points="471.84 940.03 436.6 919.55 372.06 641.11 407.3 661.59 471.84 940.03"/>
                    <polygon className="cls-4" points="422.41 634.51 387.17 614.04 634.19 553.42 669.43 573.9 422.41 634.51"/>
                    <polygon className="cls-2" points="669.43 573.9 634.19 553.42 571.63 283.52 606.87 304 669.43 573.9"/>
                    <polygon className="cls-2" points="407.3 661.59 372.06 641.11 366.93 619 402.17 639.48 407.3 661.59"/>
                    <polygon className="cls-5" points="402.17 639.48 422.41 634.51 669.43 573.9 677.25 571.98 671.41 582.43 471.84 940.03 407.3 661.59 402.17 639.48"/>
                    <polygon className="cls-4" points="402.17 639.48 366.93 619 387.17 614.04 422.41 634.51 402.17 639.48"/>
                    <polygon className="cls-3" points="242.6 804.89 207.36 784.41 619.51 45.93 654.75 66.41 242.6 804.89"/>
                    <polygon className="cls-5" points="654.75 66.41 794.53 669.44 697.12 693.35 671.41 582.43 677.25 571.98 669.43 573.9 606.87 304 422.41 634.51 402.17 639.48 407.3 661.59 340.76 780.8 242.6 804.89 654.75 66.41"/>
                </g>
            </svg>
        </PluridIcon>
    );
}


export default PluridIconAccessor;
