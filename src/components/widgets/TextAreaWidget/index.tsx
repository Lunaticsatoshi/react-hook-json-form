import { FC } from 'react';

import { Info } from 'phosphor-react';

import { IBaseWidgetProps } from '../../../lib/types';

const DEFAULT_TEXTAREA_CLASSNAMES =
  'mt-1.5 w-full body-base-regular px-4 py-2 border-2 ring-0 hover:z-20 duration-200 hover:border-grey-900 border-grey-200 focus:border-blue-200 focus:outline-none focus:z-10 focus:ring-0 shadow-xs rounded-lg disabled:border-grey-100 placeholder-grey-500 disabled:placeholder-grey-400 disabled:cursor-not-allowed transition';

export const TextAreaWidget: FC<IBaseWidgetProps> = ({
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
    <div>
    {label && (
      <label
        htmlFor={name}
        className={`block text-xs body-sm whitespace-nowrap text-grey-700 mb-1`}
      >
        {label}
      </label>
    )}
    <div className={`${label ? 'mt-1.5' : ''} relative rounded-lg w-full`}>
      <textarea
        rows={5}
        defaultValue={defaultValue}
        className={`${DEFAULT_TEXTAREA_CLASSNAMES}${
            errors[name]?.message && 'border-red-300'
          }`}
        placeholder={placeholder}
        {...register(name, {
          required: required ? requiredMessage : false,
        })}
        disabled={disabled}
        readOnly={readonly}
      ></textarea>
      {Object.keys(errors).length > 0 && !hideError && (
        <div className="w-full mt-1 body-base-regular text-red-300 flex items-center">
          <Info size={16} className="mr-1" />
          {errors[name]?.message}
        </div>
      )}
    </div>
  </div>
  );
};
