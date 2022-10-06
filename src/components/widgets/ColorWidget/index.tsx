import { FC, useState } from 'react';

import { ColorPicker } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const ColorWidget: FC<IBaseWidgetProps> = ({
  setValue,
  name,
  defaultValue,
}) => {
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  return (
    <>
      <div className="relative flex items-center justify-between ">
        <div className="relative cursor-pointer">
          <div
            className="bg-grey-50 p-1.5 flex items-center border border-grey-100 rounded-md"
            onClick={() => setOpenColorPicker((prev) => !prev)}
          >
            <div
              className="w-5 h-5 rounded-full shadow-base border-2 border-white"
              style={{
                background: `${defaultValue ?? '#000000'}`,
              }}
            ></div>
            <span className="border-l border-grey-200 ml-1.5 pl-1.5 text-base text-grey-900 uppercase">
              {selectedColor || defaultValue || ''}
            </span>
          </div>
          <div className="relative">
            <ColorPicker
              show={openColorPicker}
              handleClose={() => setOpenColorPicker((prev) => !prev)}
              onChange={(colorChanges) => {
                setValue(name, colorChanges.hex);
                setSelectedColor(colorChanges.hex);
              }}
              defaultColor={defaultValue ?? ''}
            />
          </div>
        </div>
      </div>
    </>
  );
};
