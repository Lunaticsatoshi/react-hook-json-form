import { FC } from 'react';
interface ISingleRadioProps {
    name: string;
    checked: boolean;
    onChange?: () => unknown;
}
export declare const SingleRadio: FC<ISingleRadioProps>;
export {};
