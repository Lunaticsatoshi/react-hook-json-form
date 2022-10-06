import { FC, ReactNode } from 'react';
export interface IOptionProps {
    value: string;
    label: string | ReactNode;
    id?: string;
    text?: string;
}
export interface ISingleSelectProps {
    options: IOptionProps[];
    labelText?: string;
    placeholder: string;
    onChange: (selectedItem?: IOptionProps) => unknown;
    leftIcon?: ReactNode;
    error?: string;
    customMaxHeight?: number;
    defaultSelectedOption?: IOptionProps;
    onInputChange?: (searchValue: string) => unknown;
    emptyStateText?: ReactNode | string;
    removeSelectedItemFromList?: boolean;
    disabled?: boolean;
    isClearable?: boolean;
}
export declare const SingleSelect: FC<ISingleSelectProps>;
