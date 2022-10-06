import { Info } from 'phosphor-react';
import { useController, UseControllerProps, FieldValues } from 'react-hook-form';

export interface IInput {
  label: string;
  options?: {
    label: string;
    subtext?: string;
    text?: string;
    icon?: string;
    value?: string;
    selectedBorderClasses?: string;
  }[];
  [key: string]: any;
}

export interface IRadioCardProps<T extends FieldValues> extends IInput {
  control: UseControllerProps<T>;
  error?: string;
}

export const RadioCardSmall = <T extends {}>({
  label,
  value,
  icon,
  autoFocus,
  inputNameProp,
  selectedBorderClasses = 'border-blue-400',
  onChange = () => null,
  checked,
  control,
}: IRadioCardProps<T>) => {
  const { field } = useController<T>(control);
  return (
    <div
      key={label}
      onClick={() => {
        // e.stopPropagation();
        onChange(value);
      }}
      className={`flex border-2 items-center shadow-xs hover:border-grey-900 h-full cursor-pointer px-4 py-2 justify-center border-grey-200 rounded-lg bg-white ${selectedBorderClasses}`}
    >
      <label htmlFor={label} className="w-full cursor-pointer">
        <div className="flex items-center">
          <input
            autoFocus={autoFocus}
            id={label}
            checked={checked || field.value === value}
            {...field}
            value=""
            name={inputNameProp}
            onChange={() => field.onChange(value)}
            type="radio"
            className="w-4 h-4 border-gray-300 text-abbadon ring-0 focus:ring-2 focus:border-grey-900 focus:ring-blue-200 focus:outline-none focus:ring-offset-0"
          />
          {icon && <span className="w-6 h-6 ml-2.5">{icon}</span>}
          <span className="text-base text-grey-900 ml-2.5">{label}</span>
        </div>
      </label>
    </div>
  );
};

export const RadioCardGroups = <T extends {}>({
  label,
  options,
  selectedValue,
  defaultValue,
  control,
  rows = 2,
  cols = 2,
  error,
}: IRadioCardProps<T> & {
  size?: 'small' | 'medium' | 'large';
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}) => {
  return (
    <fieldset className={`my-6`}>
      {label && (
        <div className="mb-1">
          <legend className="block text-xs body-sm whitespace-nowrap text-grey-700 mb-1">
            {label}
          </legend>
        </div>
      )}
      <div
        className={`grid grid-cols-${cols} grid-rows-${rows} gap-x-2 gap-y-3`}
      >
        {options?.map(
          ({
            label: optionLabel,
            text,
            icon,
            value,
            selectedBorderClasses,
          }) => {
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

            // render small for small radio card size
            return (
              <RadioCardSmall<T>
                // autoFocus={index === 0}
                key={optionLabel}
                label={optionLabel}
                control={control}
                text={text}
                icon={icon}
                value={value}
                {...props}
              />
            );
          },
        )}
        {error && (
          <div className="w-full mt-1 body-base-regular text-red-300 flex items-center">
            <Info size={16} className="mr-1" />
            {error}
          </div>
        )}
      </div>
    </fieldset>
  );
};
