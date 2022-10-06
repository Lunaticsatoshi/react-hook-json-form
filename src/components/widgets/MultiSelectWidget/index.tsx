import { FC, useState } from 'react';
import { Info } from 'phosphor-react';

import { CheckboxPill } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const MultiSelectWidget: FC<IBaseWidgetProps> = ({
  errors,
  setValue,
  hideError,
  name,
  label,
  enums,
  required,
  requiredMessage,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  const handleSelectOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      const filteredInterest = selectedOptions.filter(
        (each) => each !== option,
      );
      setSelectedOptions(filteredInterest);
      return;
    }
    setSelectedOptions((prev) => [...prev, option]);
  };

  return (
    <div className="my-2">
      <label className="block text-xs body-sm whitespace-nowrap text-grey-700 mb-1">
        {label}
      </label>
      <div className="flex items-center flex-wrap mb-4">
        {enums?.map((option, index) => {
          return (
            <div
              className={`mt-2 ${index !== enums.length - 1 ? 'pr-2' : ''}`}
              key={option.optionId}
            >
              <CheckboxPill
                checked={selectedOptions.includes(option.optionValue)}
                text={option.optionLabel}
                onClick={() => {
                  handleSelectOption(option.optionValue);
                  setValue(name, [...selectedOptions, option.optionValue]);
                }}
              />
            </div>
          );
        })}
      </div>
      {errors[name]?.message && required && !hideError && (
        <div className="w-full mt-1 body-base-regular text-red-300 flex items-center">
          <Info size={16} className="mr-1" />
          {hideError ? undefined : requiredMessage}
        </div>
      )}
    </div>
  );
};
