import { FC } from 'react';
import { ISingleSelectProps } from './SingleSelect';
export interface ICreatableSelectProps extends ISingleSelectProps {
    isLoading?: boolean;
    createOptionMessage?: (inputValue: string) => string;
    createOption: (inputValue?: string) => unknown;
}
export declare const CreatableSingleSelect: FC<ICreatableSelectProps>;
