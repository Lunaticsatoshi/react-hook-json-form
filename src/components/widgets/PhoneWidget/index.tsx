import { FC } from 'react';
import { DeviceMobile } from 'phosphor-react';

import { InputV2 } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const PhoneWidget: FC<IBaseWidgetProps> = ({
  disabled,
  errors,
  register,
  readonly,
  hideError,
  name,
  label,
  placeholder,
  required,
  requiredMessage,
  defaultValue,
}) => {
  return (
    <InputV2
      label={label}
      leftIcon={<DeviceMobile width={18} />}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readonly}
      defaultValue={defaultValue}
      error={hideError ? undefined : errors[name]?.message}
      {...register(name, {
        required: required ? requiredMessage : false,
      })}
    />
  );
};
