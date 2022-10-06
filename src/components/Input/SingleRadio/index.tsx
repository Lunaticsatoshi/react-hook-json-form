import { FC } from 'react';

interface ISingleRadioProps {
  name: string;
  checked: boolean;
  onChange?: () => unknown;
}

export const SingleRadio: FC<ISingleRadioProps> = ({
  checked,
  name,
  onChange = () => null,
}: ISingleRadioProps) => {
  return (
    <input
      type="radio"
      name={name}
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 border-gray-300 text-abbadon ring-0 focus:ring-2 focus:border-grey-900 focus:ring-blue-200 focus:outline-none focus:ring-offset-0"
    />
  );
};
