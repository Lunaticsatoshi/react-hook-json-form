import React from 'react';
export interface IButtonFilledProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    styleType: 'primary' | 'secondary' | 'accent' | 'warning' | '';
    label: string;
    size?: 'small' | 'medium' | 'large' | 'regular';
    customClasses?: string;
    disabled?: boolean;
    onClick?: (arg0: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const BUTTON_SIZING = "px-4 py-3 rounded-lg";
export declare const DEFAULT_BUTTON_CLASSES = "relative hover:cursor-pointer inline-flex items-center justify-center transition ease-linear border-2 focus:outline-none focus:ring-2 focus:ring-blue-200";
export declare const DISABLED_FILLED_BUTTON_CLASSES = "disabled:bg-gray-100 disabled:text-gray-400 disabled:border disabled:border-transparent disabled:cursor-not-allowed";
export declare const DISABLED_OUTLINE_BUTTON_CLASSES = "disabled:bg-white disabled:text-gray-400 disabled:border-2 disabled:border-grey-200 disabled:cursor-not-allowed";
export declare const BTN_SIZES: {
    medium: string;
    regular: string;
    small: string;
    large: string;
};
export declare const ButtonFilled: ({ styleType, label, customClasses, size, ...props }: IButtonFilledProps) => JSX.Element;
export declare const ButtonFilledWithLeftIcon: ({ styleType, label, customClasses, leftIcon, size, ...props }: IButtonFilledProps & {
    leftIcon: React.ReactNode;
}) => JSX.Element;
export declare const ButtonFilledWithRightIcon: ({ styleType, label, customClasses, rightIcon, size, ...props }: IButtonFilledProps & {
    rightIcon: React.ReactNode;
}) => JSX.Element;
export declare const ButtonOutline: ({ styleType, label, customClasses, size, ...props }: IButtonFilledProps & {
    styleType: 'primary' | 'accent' | 'warning';
}) => JSX.Element;
export declare const ButtonOutlineWithLeftIcon: ({ styleType, label, customClasses, leftIcon, size, ...props }: IButtonFilledProps & {
    styleType: 'primary' | 'accent' | 'warning';
    leftIcon: React.ReactNode;
}) => JSX.Element;
export declare const ButtonOutlineWithRightIcon: ({ styleType, label, customClasses, rightIcon, size, ...props }: IButtonFilledProps & {
    styleType: 'primary' | 'accent' | 'warning';
    rightIcon: React.ReactNode;
}) => JSX.Element;
export declare const IconButtonFilled: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<any>>;
export declare const IconButtonOutline: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<any>>;
