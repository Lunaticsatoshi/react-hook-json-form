import { FC, ReactNode, useState } from 'react';

import { useCombobox } from 'downshift';
import { CaretDown, Info } from 'phosphor-react';

import { DEFAULT_INPUT_CLASSNAMES } from '../TextInput';

interface IOptionProps {
  value: string;
  label: string | ReactNode;
  id?: string;
  text?: string;
}

export interface ISingleSelectProps {
  options: IOptionProps[];
  labelText?: string;
  placeholder: string;
  onChange: (selectedItem?: IOptionProps) => unknown;
  leftIcon?: ReactNode;
  error?: string;
  customMaxHeight?: number;
  defaultSelectedOption?: IOptionProps;
  onInputChange?: (searchValue: string) => unknown;
  emptyStateText?: ReactNode | string;
  removeSelectedItemFromList?: boolean;
}

export const SingleSelect: FC<ISingleSelectProps> = ({
  options,
  labelText,
  placeholder,
  onChange,
  leftIcon,
  error,
  customMaxHeight = 345,
  onInputChange = () => null,
  defaultSelectedOption,
  emptyStateText,
  removeSelectedItemFromList = true,
}: ISingleSelectProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [activeItem, setActiveItem] = useState<IOptionProps | null>(null);

  const getFilteredItems = () =>
    removeSelectedItemFromList
      ? options.filter((item) => item.id !== activeItem?.id)
      : options;

  const getSearchFilteredItems = () =>
    getFilteredItems().filter((item) =>
      item?.text?.toLowerCase().includes(searchValue.toLowerCase()),
    );
  const items = getSearchFilteredItems();
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    getComboboxProps,
    getInputProps,
    setInputValue,
  } = useCombobox({
    items,
    selectedItem: defaultSelectedOption,
    defaultSelectedItem: defaultSelectedOption,
    defaultInputValue: defaultSelectedOption?.text,
    inputValue: defaultSelectedOption?.text,
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          if (!inputValue) {
            setActiveItem(null);
            setInputValue('');
            onChange();
          }
          setSearchValue(inputValue ?? '');
          onInputChange(inputValue ?? '');
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setSearchValue('');
            setActiveItem(selectedItem);
            setInputValue(selectedItem?.text ?? '');
            onChange(selectedItem);
          }
          break;
        default:
          break;
      }
    },
  });

  const menuProps = { ...getMenuProps() };

  return (
    <div className="w-full">
      {labelText ? (
        <label
          className={`block body-sm whitespace-nowrap mb-1`}
          {...getLabelProps()}
        >
          {labelText}
        </label>
      ) : null}
      <div className="relative">
        <div className="relative" {...getComboboxProps()}>
          <div {...getToggleButtonProps()}>
            <div className="absolute left-1 top-0 w-10 h-10 flex items-center justify-center">
              {leftIcon || null}
            </div>
            <input
              className={`${DEFAULT_INPUT_CLASSNAMES} ${
                isOpen ? 'rounded-b-none' : ''
              } ${leftIcon ? 'pl-10' : ''} pr-10 ${
                error && 'border-red-300'
              } body-base-medium`}
              {...getInputProps()}
              placeholder={placeholder}
              name="single-select"
            />
            <button type="button" className="absolute right-0 top-0 w-10 h-10 ">
              <CaretDown width={18} color="#141414" />
            </button>
          </div>
          {error && (
            <div className="w-full mt-1 body-base-regular text-red-300 flex items-center">
              <Info size={16} className="mr-1" />
              {error}
            </div>
          )}
        </div>
        {!isOpen ? (
          <div
            ref={menuProps.ref}
            style={{ height: 0, visibility: 'hidden' }}
          />
        ) : null}
        {isOpen ? (
          <ul
            {...menuProps}
            style={{
              maxHeight: customMaxHeight,
            }}
            className="absolute top-10 left-0 bg-white w-full rounded-b-lg overflow-hidden py-1 mt-0 shadow-xl border-2 border-t-0 overflow-y-scroll border-grey-200 focus:outline-none focus:ring-0 z-50"
          >
            {items.map((item, index) => (
              <li
                style={
                  highlightedIndex === index
                    ? { backgroundColor: '#EFF3FE' }
                    : {}
                }
                key={`${item.id}${index}`}
                {...getItemProps({ item, index })}
                className={`cursor-pointer ${
                  index !== items.length - 1 ? 'border-b border-grey-200' : ''
                }`}
              >
                <div className="hover:bg-grey-50 px-4">{item.label}</div>
              </li>
            ))}

            {!items.length ? (
              <div className="px-4 body-base-medium py-2 text-grey-500">
                {emptyStateText || 'No options available'}
              </div>
            ) : null}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
