import { HTMLInputTypeAttribute } from 'react';
export interface IFileInputProps {
    customClasses?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    name: string;
    type?: HTMLInputTypeAttribute;
    labelPosition?: 'top' | 'side';
    error: string | undefined;
    onClick: () => unknown;
}
export declare const FileInput: import("react").ForwardRefExoticComponent<IFileInputProps & import("react").RefAttributes<HTMLInputElement>>;
