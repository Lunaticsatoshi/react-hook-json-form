import { HTMLInputTypeAttribute } from 'react';
interface InputV2Props extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {
    label?: string;
    placeholder: string;
    name: string;
    type?: HTMLInputTypeAttribute;
    labelPosition?: 'top' | 'side';
    customContainerClasses?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    customClasses?: string;
    error: string | undefined;
}
export declare const InputV2: import("react").ForwardRefExoticComponent<InputV2Props & import("react").RefAttributes<HTMLInputElement>>;
export {};
