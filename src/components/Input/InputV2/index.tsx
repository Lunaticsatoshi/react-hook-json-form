import { forwardRef, HTMLInputTypeAttribute } from 'react';

import { Info } from 'phosphor-react';

import { DEFAULT_INPUT_CLASSNAMES } from '../TextInput';

interface InputV2Props
  extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {
  label?: string;
  placeholder: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  labelPosition?: 'top' | 'side';
  customContainerClasses?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  customClasses?: string;
  error: string | undefined;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export const InputV2 = forwardRef<HTMLInputElement, InputV2Props>(
  (
    {
      label,
      placeholder,
      name,
      leftIcon,
      rightIcon,
      labelPosition = 'top',
      customClasses,
      type = 'text',
      error,
      ...registerProps
    },
    ref = null,
  ) => {
    const paddingClasses = classNames(
      leftIcon && 'pl-12',
      rightIcon && 'pr-10',
    );
    return (
      <div className={labelPosition === 'side' ? 'flex items-center' : ''}>
        {label && (
          <label
            htmlFor={name}
            className={`block text-xs body-sm whitespace-nowrap text-grey-700 mb-1 ${
              labelPosition === 'side' ? 'mr-10' : ''
            }`}
          >
            {label}
          </label>
        )}
        <div className={`${label ? 'mt-1.5' : ''} relative rounded-lg w-full`}>
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center h-10">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            id={name}
            name={name}
            className={`${DEFAULT_INPUT_CLASSNAMES} ${customClasses} ${paddingClasses} ${
              error && 'border-red-300'
            }`}
            placeholder={placeholder}
            {...registerProps}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {rightIcon}
            </div>
          )}
          {error && (
            <div className="w-full mt-1 body-base-regular text-red-300 flex items-center">
              <Info size={16} className="mr-1" />
              {error}
            </div>
          )}
        </div>
      </div>
    );
  },
);

InputV2.displayName = 'InputV2';
