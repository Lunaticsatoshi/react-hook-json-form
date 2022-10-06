import { FC, ReactNode } from 'react';
export interface IPillProps {
    text: string;
    leftIcon?: ReactNode;
    onClick?: () => any;
    checked?: boolean;
}
interface IUserPillProps {
    id: string;
    url: string;
    name: string;
    onClick: (id: string) => unknown;
}
interface IUserOptionPillProps {
    profilePicUrl: string;
    name: string;
    showCheckbox?: boolean;
    email: string;
    selected?: boolean | undefined;
    shouldShowBorder?: boolean;
}
export declare const CheckboxPill: FC<IPillProps>;
export declare const UserPill: FC<IUserPillProps>;
export declare const UserOptionPill: FC<IUserOptionPillProps>;
export {};
