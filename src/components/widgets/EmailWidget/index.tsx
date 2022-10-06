import { FC } from 'react';
import { EnvelopeSimple } from 'phosphor-react';

import { InputV2 } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const EmailWidget: FC<IBaseWidgetProps> = ({
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
      leftIcon={<EnvelopeSimple width={18} />}
      type="email"
      placeholder={placeholder || 'Enter your email'}
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
