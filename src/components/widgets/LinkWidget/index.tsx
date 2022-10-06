import { FC } from 'react';
import { Link } from 'phosphor-react';

import { InputV2 } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const LinkWidget: FC<IBaseWidgetProps> = ({
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
      leftIcon={<Link width={18} />}
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
