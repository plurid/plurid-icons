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
                paddingBottom: '3rem',
            }}
        >
            <div
                style={{
                    marginTop: '3rem',
                    marginBottom: '2rem',
                }}
            >
                <h2>
                    {title}
                </h2>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridGap: '4rem',
                    gridTemplateColumns: 'repeat(12, 5rem)',
                    alignItems: 'center',
                    justifyItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {children}
            </div>
        </div>
    );
}


export default IconSet;
