import React, {
    useState,
} from 'react';

import PluridIcon from '../../PluridIcon';

import {
    PluridIconProperties,
} from '../../interfaces';



const PluridIconDelete: React.FC<PluridIconProperties> = (properties) => {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <PluridIcon
            {...properties}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 902 902"
                onMouseEnter={(e) => setMouseOver(true)}
                onMouseLeave={(e) => setMouseOver(false)}
            >
                {mouseOver && (
                    <g>
                        <path d="M451,1C202.47,1,1,202.47,1,451S202.47,901,451,901,901,699.53,901,451,699.53,1,451,1Zm0,803C256,804,98,646,98,451S256,98,451,98,804,256,804,451,646,804,451,804Z" />
                        <path d="M451,1C202.47,1,1,202.47,1,451S202.47,901,451,901,901,699.53,901,451,699.53,1,451,1Zm0,803C256,804,98,646,98,451S256,98,451,98,804,256,804,451,646,804,451,804Z" />
                    </g>
                )}
                <path d="M653,590.52,513.48,451,653,311.48A44.19,44.19,0,0,0,653,249h0a44.19,44.19,0,0,0-62.48,0L451,388.52,311.48,249A44.19,44.19,0,0,0,249,249h0a44.19,44.19,0,0,0,0,62.48L388.52,451,249,590.52A44.19,44.19,0,0,0,249,653h0a44.19,44.19,0,0,0,62.48,0L451,513.48,590.52,653A44.19,44.19,0,0,0,653,653h0A44.19,44.19,0,0,0,653,590.52Z" />
            </svg>
        </PluridIcon>
    );
}


export default PluridIconDelete;
