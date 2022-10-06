import { FC, useState, useRef } from 'react';
import { PlusCircle, Info } from 'phosphor-react';

import { CheckboxPill } from '../../Input';
import { IBaseWidgetProps } from '../../../lib/types';

export const EditableSelectWidget: FC<IBaseWidgetProps> = ({
  errors,
  setValue,
  hideError,
  name,
  label,
  required,
  requiredMessage,
  enums,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);
  const [customOptions, setCustomOptions] = useState<
    Array<Record<string, any>>
  >([]);
  const customOptionsRef = useRef<HTMLSpanElement>(null);
  const [customInterestInputActive, setCustomInterestInputActive] =
    useState(false);

  const handleSelectOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      const filteredInterest = selectedOptions.filter(
        (each) => each !== option,
      );
      setSelectedOptions(filteredInterest);
      setValue(name, filteredInterest);
      return;
    }
    setSelectedOptions((prev) => [...prev, option]);
    setValue(name, [...selectedOptions, option]);
  };

  return (
    <div className="my-5 -mt-4">
      <label className="block text-xs body-sm whitespace-nowrap text-grey-700 mb-1">
        {label}
      </label>
      <div className="flex items-center flex-wrap mb-4">
        {enums?.map((option, index) => {
          return (
            <div
              className={`mt-2 ${index !== enums.length - 1 ? 'pr-2' : ''}`}
              key={option.optionId}
            >
              <CheckboxPill
                checked={selectedOptions.includes(option.optionValue)}
                text={option.optionLabel}
                onClick={() => handleSelectOption(option.optionValue)}
              />
            </div>
          );
        })}
      </div>
      <hr />
      <div className="flex items-end flex-wrap mt-2">
        {customOptions?.map((option, index) => {
          return (
            <div
              className={`mt-2 ${
                index !== customOptions.length - 1 ? 'pr-2' : ''
              }`}
              key={option.optionId}
            >
              <CheckboxPill
                checked={selectedOptions.includes(option.optionValue)}
                text={option.optionLabel}
                onClick={() => handleSelectOption(option.optionValue)}
              />
            </div>
          );
        })}
      </div>
      <div
        className={`inline-flex flex-col relative ${
          customOptions.length === 0 ? '-ml-2' : ''
        }`}
      >
        <div className="flex relative">
          <PlusCircle
            size={20}
            color="#141414"
            className="z-10 absolute mt-1 top-1/2 -translate-y-1/2 left-4"
          />
          <span
            ref={customOptionsRef}
            className="hobby-editable-span mt-2 ml-2 rounded-full body-base-regular pl-8 pr-4 py-2 border-2 ring-0 duration-200 hover:border-grey-900 border-grey-200 focus:border-blue-200 focus:outline-none focus:ring-0 shadow-xs disabled:border-grey-100 placeholder-grey-500 disabled:placeholder-grey-400 disabled:cursor-not-allowed transition"
            onFocus={() => {
              // setCustomInterestInputActive(true);
            }}
            onBlur={() => {
              setCustomInterestInputActive(false);
              if (customOptionsRef.current?.innerText) {
                customOptionsRef.current.innerText = '';
              }
            }}
            contentEditable
            role="textbox"
            onInput={() => {
              setCustomInterestInputActive(true);
            }}
            onKeyPress={(e) => {
              const value = (e.target as any)?.innerText;
              if (e.code === 'Enter' || e.key === 'Enter') {
                e.preventDefault();

                if (value) {
                  if (
                    customOptions.find((ele) => ele.optionValue === value) ||
                    enums?.find((ele) => ele.optionValue === value)
                  ) {
                    if (customOptionsRef.current?.innerText) {
                      customOptionsRef.current.innerText = '';
                    }
                    // if (!interests.find((ele) => ele.optionValue === value)) {
                    //   addInterest(value);
                    // }
                    return;
                  }

                  setCustomOptions([
                    ...customOptions,
                    {
                      optionId: `${Math.random()}`,
                      optionName: `${Math.random()}${value}`,
                      optionLabel: value,
                      optionValue: value,
                    },
                  ]);

                  setSelectedOptions((prev) => [...prev, value]);
                  setValue(name, [...selectedOptions, value]);

                  if (customOptionsRef.current?.innerText) {
                    customOptionsRef.current.innerText = '';
                  }
                } else {
                  e.stopPropagation();
                }
              }
            }}
            suppressContentEditableWarning={true}
          />
        </div>
        {customInterestInputActive && (
          <span className="absolute -bottom-7 left-4 text-grey-400 whitespace-nowrap">
            Hit enter to save
          </span>
        )}

        {Object.keys(errors).length > 0 && required && (
          <div className="w-full mt-1 body-base-regular text-red-300 flex items-center">
            <Info size={16} className="mr-1" />
            {hideError ? undefined : requiredMessage}
          </div>
        )}
      </div>
    </div>
  );
};
