import { FC } from 'react';

import { ChromePicker, ColorChangeHandler } from 'react-color';

import { useDelayUnmount } from '../../../hooks/useDelayUnmount';

export interface IColorPickerProps {
  show: boolean;
  handleClose: () => unknown;
  defaultColor?: string;
  onChange: ColorChangeHandler | undefined;
}

export const ColorPicker: FC<IColorPickerProps> = ({
  show,
  handleClose,
  onChange,
  defaultColor,
}: IColorPickerProps) => {
  const shouldRender = useDelayUnmount(show, 200);

  return (
    <div className="absolute z-[999]">
      {shouldRender ? (
        <div
          className={`${
            show ? 'animate-inOpacityAnimation' : 'animate-outOpacityAnimation'
          }`}
        >
          <div className="fixed inset-0 cursor-default" onClick={handleClose} />
          <ChromePicker color={defaultColor} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
};
