import { FC } from 'react';
export interface IInput {
    label: string;
    options?: {
        label: string;
        subtext: string;
        text?: string;
        icon?: string;
        customOptionContainerClasses?: string;
        value?: string;
        selectedBorderClasses?: string;
    }[];
    [key: string]: any;
}
export declare const RadioGroups: import("react").ForwardRefExoticComponent<Pick<IInput, keyof IInput> & import("react").RefAttributes<unknown>>;
export declare const RadioCard: FC<IInput>;
export declare const RadioCardSmall: ({ label, value, icon, inputNameProp, customOptionContainerClasses, selectedBorderClasses, onChange, checked, }: IInput) => JSX.Element;
export declare const RadioCardGroups: {
    ({ label, options, customContainerClasses, SelectorComponent, selectedValue, defaultValue, ...inputProps }: IInput & {
        SelectorComponent: React.FC<IInput>;
    }): JSX.Element;
    displayName: string;
};
