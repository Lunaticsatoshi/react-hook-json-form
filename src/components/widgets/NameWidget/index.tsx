import { FC } from 'react';

import { InputV2 } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

interface INameWidgetProps extends IBaseWidgetProps {
  middleName?: boolean;
}

export const NameWidget: FC<INameWidgetProps> = ({
  disabled,
  errors,
  register,
  readonly,
  hideError,
  required,
  defaultValue,
  middleName,
}) => {
  return (
    <div className="grid gap-x-4 grid-cols-2 w-full">
      <InputV2
        label="First Name"
        placeholder="What you would call them"
        error={hideError ? undefined : errors.firstName?.message}
        disabled={disabled}
        readOnly={readonly}
        defaultValue={defaultValue?.firstName}
        {...register('firstName', {
          required: required ? 'Please enter their first name' : false,
        })}
      />
      {middleName && (
        <InputV2
          label="Middle Name"
          disabled={disabled}
          readOnly={readonly}
          defaultValue={defaultValue?.middleName}
          placeholder="Their middle name"
          error={hideError ? undefined : errors.middleName?.message}
          {...register('middleName')}
        />
      )}
      <InputV2
        label="Last Name"
        disabled={disabled}
        readOnly={readonly}
        defaultValue={defaultValue?.lastName}
        placeholder="Their family name"
        error={hideError ? undefined : errors.lastName?.message}
        {...register('lastName')}
      />
    </div>
  );
};
