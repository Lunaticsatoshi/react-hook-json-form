interface ISelectProps {
    type?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    [key: string]: any;
    options: {
        label: string;
        value: string;
        selected?: boolean;
    }[];
    error: string | undefined;
    disabled?: boolean;
}
export declare const Select: ({ name, label, placeholder, options, error, disabled, ...inputProps }: ISelectProps) => JSX.Element;
export {};
