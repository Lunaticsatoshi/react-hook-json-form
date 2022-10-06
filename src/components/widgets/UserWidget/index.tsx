import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { User } from 'phosphor-react';

import { SingleSelect, UserOptionPill } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const UserWidget: FC<IBaseWidgetProps> = ({
  errors,
  control,
  setError,
  setValue,
  clearErrors,
  resetField,
  hideError,
  name,
  label,
  placeholder,
  required,
  requiredMessage,
  defaultValue,
  enums,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{
        required: required ? requiredMessage : false,
      }}
      render={({ field }) => (
        <SingleSelect
          onChange={(selectedItem) => field.onChange(selectedItem?.value ?? '')}
          placeholder={placeholder}
          labelText={label}
          error={hideError ? undefined : errors[name]?.message}
          onInputChange={(value) => {
            const item = enums?.find((each) => each.name === value);
            if (!item) {
              resetField(name);
              setError(name, {
                message: "This User doesn't exist",
              });
              return false;
            }
            setValue(name, item._id);
            clearErrors(name);
            return true;
          }}
          options={
            enums?.map((user, index) => {
              return {
                label: (() => (
                  <UserOptionPill
                    email={user.email ?? ''}
                    name={user.name}
                    profilePicUrl={user.profilePicUrl}
                    shouldShowBorder={index !== enums.length - 1 || false}
                  />
                ))(),
                text: user.name,
                value: user._id,
                id: user?._id,
              };
            }) ?? []
          }
          leftIcon={<User size={18} color="#141414" />}
        />
      )}
    />
  );
};
