import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { SingleSelect } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const SelectWidget: FC<IBaseWidgetProps> = ({
  errors,
  control,
  hideError,
  name,
  label,
  placeholder,
  required,
  requiredMessage,
  defaultValue,
  enums,
  disabled,
  options
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{
        required: required ? requiredMessage : false,
      }}
      render={({ field: { onChange, value } }) => (
        <SingleSelect
        labelText={label}
        disabled={disabled}
        emptyStateText={'Please select a option'}
        error={hideError ? undefined : errors[name]?.message}
        leftIcon={
          options?.icon ? options.icon : () => {}
        }
        defaultSelectedOption={{
          label: value ?? '',
          value: value ?? '',
          id: value ?? '',
          text: value ?? '',
        }}
        removeSelectedItemFromList={true}
        options={
          enums?.map((fieldOption: any, index: number) => {
            return {
              label: fieldOption.optionLabel,
              text: fieldOption.optionLabel,
              value: fieldOption.optionValue,
              id: fieldOption.optionId || index,
            };
          }) ?? []
        }
        placeholder={placeholder}
        onChange={(item) => {
          onChange(item?.text);
        }}
      />
      )}
    />
  );
};
