import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { CreatableSingleSelect } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const SearchSelectWidget: FC<IBaseWidgetProps> = ({
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
  options,
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
        <CreatableSingleSelect
          labelText={label}
          disabled={disabled}
          error={hideError ? undefined : errors[name]?.message}
          leftIcon={
            options?.icon ? options.icon : () => {}
          }
          defaultSelectedOption={
            value
              ? {
                  value: value ?? '',
                  label: value ?? '',
                  text: value ?? '',
                  id: value ?? '',
                }
              : undefined
          }
          createOption={(searchValue) => {
            onChange(searchValue);
          }}
          createOptionMessage={(inputValue) => `No results ${
            inputValue ? `for “${inputValue}”` : ''
          } found. Clicking here or hitting enter will
    create a new section.`}
          removeSelectedItemFromList={false}
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
