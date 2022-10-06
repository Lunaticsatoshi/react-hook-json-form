import { forwardRef, FC } from 'react';

export interface IInput {
  label: string;
  options?: {
    label: string;
    subtext: string;
    text?: string;
    icon?: string;
    customOptionContainerClasses?: string;
    value?: string;
    selectedBorderClasses?: string;
  }[];
  [key: string]: any;
}

export const RadioGroups = forwardRef(
  ({ label, options, customContainerClasses, ...inputProps }: IInput) => {
    return (
      <fieldset className={`my-6 ${customContainerClasses}`}>
        {label && (
          <div className="mb-4">
            <legend className="text-base font-medium text-left text-gray-900">
              {label}
            </legend>
          </div>
        )}
        <div className="space-y-4">
          {options?.map(({ label: optionLabel, subtext }) => (
            <div key={optionLabel} className="flex items-center">
              <input
                id={optionLabel}
                type="radio"
                name={label}
                className="w-4 h-4 border-gray-300 text-diver focus:ring-offblack"
                checked={optionLabel === inputProps.value}
                {...inputProps}
              />
              <label
                htmlFor={optionLabel}
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                {optionLabel}{' '}
                <span className="text-xs opacity-50">{subtext}</span>
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    );
  },
);

export const RadioCard: FC<IInput> = ({
  label,
  icon,
  text,
  name,
  onClick = () => null,
  customOptionContainerClasses = '',
  ...inputProps
}: IInput) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center shadow-xs h-full cursor-pointer py-4 justify-center rounded-lg bg-white flex-col ${customOptionContainerClasses}`}
    >
      <label
        onClick={(e) => {
          e.stopPropagation();
        }}
        htmlFor={label}
        className="pb-4 w-full cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <span className="h-11 flex items-end">{icon}</span>
          <span className="mt-2">{text}</span>
        </div>
      </label>
      <input
        id={label}
        type="radio"
        name={name}
        onChange={() => {}}
        className="w-4 h-4 border-gray-300 text-abbadon ring-0 focus:ring-0"
        {...inputProps}
      />
    </div>
  );
};

export const RadioCardSmall = ({
  label,
  value,
  icon,
  inputNameProp,
  customOptionContainerClasses,
  selectedBorderClasses = 'border-blue-400',
  onChange,
  checked,
}: IInput) => {
  return (
    <div
      key={label}
      onClick={() => {
        // e.stopPropagation();
        onChange(value);
      }}
      className={`flex border-2 items-center shadow-xs hover:border-grey-900 h-full cursor-pointer px-4 py-2 justify-center border-grey-200 rounded-lg bg-white ${customOptionContainerClasses} ${selectedBorderClasses}`}
    >
      <label htmlFor={label} className="w-full cursor-pointer">
        <div className="flex items-center">
          <input
            // autoFocus={autoFocus}
            id={label}
            checked={checked}
            name={inputNameProp}
            type="radio"
            onChange={() => {}}
            className="w-4 h-4 border-gray-300 text-abbadon focus:ring-offblack ring-0 focus:ring-0 focus:border-none focus:outline-none focus:ring-offset-0"
          />
          {icon && (
            <span className="w-6 ml-3.5 flex items-center justify-center">
              {icon}
            </span>
          )}
          <span className="text-base text-grey-900 ml-1.5">{label}</span>
        </div>
      </label>
    </div>
  );
};

export const RadioCardGroups = ({
  label,
  options,
  customContainerClasses,
  SelectorComponent = RadioCard,
  selectedValue,
  defaultValue,
  ...inputProps
}: IInput & { SelectorComponent: React.FC<IInput> }) => {
  return (
    <fieldset className={`my-6 ${customContainerClasses}`}>
      {label && (
        <div className="mb-4">
          <legend className="text-base font-medium text-left text-gray-900">
            {label}
          </legend>
        </div>
      )}
      <div className="space-y-2">
        {options?.map(
          (
            {
              label: optionLabel,
              text,
              icon,
              value,
              customOptionContainerClasses,
              selectedBorderClasses,
            },
            index,
          ) => {
            const props: Record<string, any> = {};
            if (selectedValue) {
              if (selectedValue === value) {
                props.selectedBorderClasses = selectedBorderClasses;
                props.checked = true;
              } else {
                props.selectedBorderClasses = '';
                props.checked = false;
              }
            } else if (defaultValue && defaultValue === value) {
              props.selectedBorderClasses = selectedBorderClasses;
              props.checked = true;
            } else {
              props.selectedBorderClasses = '';
              props.checked = false;
            }

            return (
              <SelectorComponent
                autoFocus={index === 0}
                key={optionLabel}
                label={optionLabel}
                text={text}
                icon={icon}
                value={value}
                customOptionContainerClasses={customOptionContainerClasses}
                {...props}
                {...inputProps}
              />
            );
          },
        )}
      </div>
    </fieldset>
  );
};

RadioCardGroups.displayName = 'RadioCardGroups';
RadioGroups.displayName = 'RadioGroups';
