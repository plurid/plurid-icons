import React from 'react';



interface IconSetProperties {
    title: string;
}

const IconSet: React.FC<IconSetProperties> = (properties) => {
    const {
        title,
        children,
    } = properties;

    return (
        <div
            style={{
                marginBottom: '4rem',
            }}
        >
            <div>
                <h2>
                    {title}
                </h2>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}
            >
                {children}
            </div>
        </div>
    );
}


export default IconSet;
