import { FC } from 'react';
import { IBaseWidgetProps } from '../../../lib/types';
interface INameWidgetProps extends IBaseWidgetProps {
    middleName?: boolean;
}
export declare const NameWidget: FC<INameWidgetProps>;
export {};
