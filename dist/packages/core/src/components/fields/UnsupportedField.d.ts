import { FC } from 'react';
export interface IUnsupportedFieldProps {
    schema: any;
    reason: string;
}
declare const UnsupportedField: FC<IUnsupportedFieldProps>;
export default UnsupportedField;
