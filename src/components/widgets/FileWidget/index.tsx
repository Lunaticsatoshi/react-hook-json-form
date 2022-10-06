import { FC } from 'react';

import { FileInput } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const FileWidget: FC<IBaseWidgetProps> = ({
  disabled,
  errors,
  register,
  hideError,
  name,
  label,
  placeholder,
  required,
  options,
  requiredMessage,
}) => {
  const onClickFunction = options?.onClick;
  return (
    <div>
      <FileInput
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        error={hideError ? undefined : errors[name]?.message}
        {...register(name, {
          required: required ? requiredMessage : false,
        })}
        onClick={onClickFunction ? onClickFunction : () => {}}
      />
    </div>
  );
};
