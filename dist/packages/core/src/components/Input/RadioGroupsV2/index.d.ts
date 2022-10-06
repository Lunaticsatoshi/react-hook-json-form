import { UseControllerProps, FieldValues } from 'react-hook-form';
export interface IInput {
    label: string;
    options?: {
        label: string;
        subtext?: string;
        text?: string;
        icon?: string;
        value?: string;
        selectedBorderClasses?: string;
    }[];
    [key: string]: any;
}
export interface IRadioCardProps<T extends FieldValues> extends IInput {
    control: UseControllerProps<T>;
    error?: string;
}
export declare const RadioCardSmall: <T extends {}>({ label, value, icon, autoFocus, inputNameProp, selectedBorderClasses, onChange, checked, control, }: IRadioCardProps<T>) => JSX.Element;
export declare const RadioCardGroups: <T extends {}>({ label, options, selectedValue, defaultValue, control, rows, cols, error, }: IRadioCardProps<T> & {
    size?: "small" | "large" | "medium" | undefined;
    rows?: 5 | 1 | 2 | 3 | 4 | 6 | 7 | undefined;
    cols?: 5 | 1 | 2 | 3 | 4 | 6 | 7 | undefined;
}) => JSX.Element;
