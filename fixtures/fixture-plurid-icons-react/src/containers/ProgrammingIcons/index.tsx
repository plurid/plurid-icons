import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconClass,
    PluridIconClassAccessor,
    PluridIconClassConstructor,
    PluridIconClassIndexSignature,
    PluridIconClassInheritedAccessor,
    PluridIconClassInheritedConstructor,
    PluridIconClassInheritedMethod,
    PluridIconClassInheritedProperty,
    PluridIconClassMethod,
    PluridIconClassPrivateAccessor,
    PluridIconClassPrivateMethod,
    PluridIconClassPrivateProperty,
    PluridIconClassProperty,
    PluridIconClassProtectedAccessor,
    PluridIconClassProtectedMethod,
    PluridIconClassProtectedProperty,
    PluridIconClassStaticMethod,
    PluridIconClassStaticProperty,
    PluridIconClassTyped,
    PluridIconEnumeration,
    PluridIconEnumerationMember,
    PluridIconEnumerationMethod,
    PluridIconEnumerationProperty,
    PluridIconFunction,
    PluridIconFunctionTyped,
    PluridIconIndexSignature,
    PluridIconInterface,
    PluridIconInterfaceConstructor,
    PluridIconInterfaceIndexSignature,
    PluridIconInterfaceMethod,
    PluridIconInterfaceProperty,
    PluridIconInterfaceTyped,
    PluridIconModule,
    PluridIconObjectLiteral,
    PluridIconTypeAlias,
    PluridIconTypeAliasTyped,
    PluridIconVariable,
} from '@plurid/plurid-icons-react';

import IconSet from '../../components/IconSet';

import {
    IconListItem,
} from '../../interfaces';



const icons: IconListItem[] = [
    {
        Element: PluridIconClass,
        title: 'class',
    },
    {
        Element: PluridIconClassAccessor,
        title: 'class accessor',
    },
    {
        Element: PluridIconClassConstructor,
        title: 'class constructor',
    },
    {
        Element: PluridIconClassIndexSignature,
        title: 'class index signature',
    },
    {
        Element: PluridIconClassInheritedAccessor,
        title: 'class inherited accessor',
    },
    {
        Element: PluridIconClassInheritedConstructor,
        title: 'class inherited constructor',
    },
    {
        Element: PluridIconClassInheritedMethod,
        title: 'class inherited method',
    },
    {
        Element: PluridIconClassInheritedProperty,
        title: 'class inherited property',
    },
    {
        Element: PluridIconClassMethod,
        title: 'class method',
    },
    {
        Element: PluridIconClassPrivateAccessor,
        title: 'class private accessor',
    },
    {
        Element: PluridIconClassPrivateMethod,
        title: 'class private method',
    },
    {
        Element: PluridIconClassPrivateProperty,
        title: 'class private property',
    },
    {
        Element: PluridIconClassProperty,
        title: 'class property',
    },
    {
        Element: PluridIconClassProtectedAccessor,
        title: 'class protected accessor',
    },
    {
        Element: PluridIconClassProtectedMethod,
        title: 'class protected method',
    },
    {
        Element: PluridIconClassProtectedProperty,
        title: 'class protected property',
    },
    {
        Element: PluridIconClassStaticMethod,
        title: 'class static method',
    },
    {
        Element: PluridIconClassStaticProperty,
        title: 'class static property',
    },
    {
        Element: PluridIconClassTyped,
        title: 'class typed',
    },
    {
        Element: PluridIconEnumeration,
        title: 'enumeration',
    },
    {
        Element: PluridIconEnumerationMember,
        title: 'enumeration member',
    },
    {
        Element: PluridIconEnumerationMethod,
        title: 'enumeration method',
    },
    {
        Element: PluridIconEnumerationProperty,
        title: 'enumeration property',
    },
    {
        Element: PluridIconFunction,
        title: 'function',
    },
    {
        Element: PluridIconFunctionTyped,
        title: 'function typed',
    },
    {
        Element: PluridIconIndexSignature,
        title: 'index signature',
    },
    {
        Element: PluridIconInterface,
        title: 'interface',
    },
    {
        Element: PluridIconInterfaceConstructor,
        title: 'interface constructor',
    },
    {
        Element: PluridIconInterfaceIndexSignature,
        title: 'interface index signature',
    },
    {
        Element: PluridIconInterfaceMethod,
        title: 'interface method',
    },
    {
        Element: PluridIconInterfaceProperty,
        title: 'interface property',
    },
    {
        Element: PluridIconInterfaceTyped,
        title: 'interface typed',
    },
    {
        Element: PluridIconModule,
        title: 'module',
    },
    {
        Element: PluridIconObjectLiteral,
        title: 'object literal',
    },
    {
        Element: PluridIconTypeAlias,
        title: 'type alias',
    },
    {
        Element: PluridIconTypeAliasTyped,
        title: 'type alias typed',
    },
    {
        Element: PluridIconVariable,
        title: 'variable',
    },
];


interface PluridSpecificIconsProperties {
    theme: Theme;
    iconSize: 'small' | 'normal' | 'large';
    titleAppearTime: number;
    titleDisappearTime: number;
}

const PluridSpecificIcons: React.FC<PluridSpecificIconsProperties> = (properties) => {
    const {
        theme,
        iconSize,
        titleAppearTime,
        titleDisappearTime,
    } = properties;

    return (
        <IconSet
            title="programming icons"
        >
            {icons.map(icon => {
                const {
                    Element,
                    title,
                } = icon;

                return (
                    <Element
                        key={title}
                        theme={theme}
                        title={title}
                        size={iconSize}
                        titleAppearTime={titleAppearTime}
                        titleDisappearTime={titleDisappearTime}
                    />
                );
            })}
        </IconSet>
    );
}


export default PluridSpecificIcons;
