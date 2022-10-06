import React from 'react';
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder: string;
    name: string;
    value?: string;
    labelPosition?: 'top' | 'side';
    customContainerClasses?: string;
}
export declare const DEFAULT_INPUT_CLASSNAMES = "w-full body-base-regular px-4 py-2 border-2 ring-0 hover:z-20 duration-200 hover:border-grey-900 border-grey-200 focus:border-blue-200 focus:outline-none focus:z-10 focus:ring-0 shadow-xs rounded-lg disabled:border-grey-100 placeholder-grey-500 disabled:placeholder-grey-400 disabled:cursor-not-allowed transition";
export declare const Input: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<any>>;
export declare const InputWithIcon: ({ label, placeholder, name, leftIcon, rightIcon, labelPosition, customClasses, ...props }: IInputProps & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    customClasses?: string | undefined;
}) => JSX.Element;
export declare const AutonomousInput: ({ label, placeholder, name, labelPosition, type, customContainerClasses, ...props }: IInputProps) => JSX.Element;
export {};
