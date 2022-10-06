import { FC } from 'react';
import { ColorChangeHandler } from 'react-color';
export interface IColorPickerProps {
    show: boolean;
    handleClose: () => unknown;
    defaultColor?: string;
    onChange: ColorChangeHandler | undefined;
}
export declare const ColorPicker: FC<IColorPickerProps>;
