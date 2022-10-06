import React, { forwardRef } from 'react';
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  name: string;
  value?: string;
  labelPosition?: 'top' | 'side';
  customContainerClasses?: string;
}

export const DEFAULT_INPUT_CLASSNAMES =
  'w-full body-base-regular px-4 py-2 border-2 ring-0 hover:z-20 duration-200 hover:border-grey-900 border-grey-200 focus:border-blue-200 focus:outline-none focus:z-10 focus:ring-0 shadow-xs rounded-lg disabled:border-grey-100 placeholder-grey-500 disabled:placeholder-grey-400 disabled:cursor-not-allowed transition';

export const Input = forwardRef<any, any>(
  (
    {
      label,
      placeholder,
      name,
      labelPosition = 'top',
      type = 'text',
      customContainerClasses,
      ...props
    }: IInputProps,
    ref = null,
  ) => {
    return (
      <div
        className={`${
          labelPosition === 'side' ? 'flex items-center' : ''
        } ${customContainerClasses}`}
      >
        <label
          htmlFor={name}
          className={`block body-sm whitespace-nowrap ${
            props.disabled ? 'text-grey-500' : 'text-grey-700'
          } ${labelPosition === 'side' ? 'mr-10' : ''}`}
        >
          {label}
        </label>
        <div className="my-1 w-full">
          <input
            ref={ref}
            type={type}
            name={name}
            id={name}
            className={`${DEFAULT_INPUT_CLASSNAMES}`}
            placeholder={placeholder}
            {...props}
          />
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';

export const InputWithIcon = ({
  label,
  placeholder,
  name,
  leftIcon,
  rightIcon,
  labelPosition = 'top',
  customClasses,
  ...props
}: IInputProps & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  customClasses?: string;
}) => {
  return (
    <div className={labelPosition === 'side' ? 'flex items-center' : ''}>
      {label && (
        <label
          htmlFor={name}
          className={`block body-sm text-grey-700 whitespace-nowrap ${
            labelPosition === 'side' ? 'mr-10' : ''
          }`}
        >
          {label}
        </label>
      )}
      <div className={`${label ? 'mt-1' : ''} relative rounded-lg w-full`}>
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center">
            {leftIcon}
          </div>
        )}
        <input
          type="text"
          name={name}
          id={name}
          className={`${DEFAULT_INPUT_CLASSNAMES} ${customClasses} ${
            leftIcon ? 'pl-12' : 'pr-10'
          }`}
          placeholder={placeholder}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export const AutonomousInput = ({
  label,
  placeholder,
  name,
  labelPosition = 'top',
  type = 'text',
  customContainerClasses,
  ...props
}: IInputProps) => {
  return (
    <div
      className={`${
        labelPosition === 'side' ? 'flex items-center' : ''
      } ${customContainerClasses}`}
    >
      <label
        htmlFor={name}
        className={`block body-sm whitespace-nowrap ${
          props.disabled ? 'text-grey-500' : 'text-grey-700'
        } ${labelPosition === 'side' ? 'mr-10' : ''}`}
      >
        {label}
      </label>
      <div className="my-1 w-full">
        <input
          type={type}
          name={name}
          id={name}
          className={`${DEFAULT_INPUT_CLASSNAMES}`}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};
