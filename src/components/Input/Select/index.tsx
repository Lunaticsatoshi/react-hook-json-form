import { Info } from 'phosphor-react';
interface ISelectProps {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  [key: string]: any;
  options: { label: string; value: string; selected?: boolean }[];
  error: string | undefined;
  disabled?: boolean;
}

export const Select = ({
  name,
  label,
  placeholder,
  options,
  error,
  disabled,
  ...inputProps
}: ISelectProps) => {
  return (
    <div>
      {label ? (
        <legend className="block text-xs body-sm whitespace-nowrap text-grey-700 mb-1">
          {label}
        </legend>
      ) : null}
      <select
        autoFocus
        id={name}
        name={name}
        className="block w-full py-2 pl-3 pr-10 text-base border-gray-200 hover:border-grey-800 rounded-md focus:outline-none focus:border-blue-200 focus:ring-0 sm:text-sm border-2 shadow-xs"
        placeholder={placeholder}
        onChange={inputProps.onChange}
        value={inputProps.value}
        disabled={disabled}
        {...inputProps}
      >
        {options.map(({ label: optionLabel, value }) => (
          <option key={value} value={value}>
            {optionLabel}
          </option>
        ))}
      </select>

      {error && (
        <div className="w-full mt-1 body-base-regular text-red-300 flex items-center">
          <Info size={16} className="mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};
