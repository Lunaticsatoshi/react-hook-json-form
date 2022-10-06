import { FC } from 'react';

import { CaretDown, Check, Info, X } from 'phosphor-react';
import { components, GroupBase, InputProps, StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';

import { DEFAULT_INPUT_CLASSNAMES } from '../TextInput';
import { ISingleSelectProps, IOptionProps } from './SingleSelect';

export interface ICreatableSelectProps extends ISingleSelectProps {
  isLoading?: boolean;
  createOptionMessage?: (inputValue: string) => string;
  createOption: (inputValue?: string) => unknown;
}

export const CreatableSingleSelect: FC<ICreatableSelectProps> = ({
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
  removeSelectedItemFromList = false,
  createOption,
  createOptionMessage = () => '',
  disabled,
  isLoading,
  isClearable = true,
}: ICreatableSelectProps) => {
  const ValueContainer = ({ children, ...props }: any) => {
    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    );
  };

  const Menu = (props: any) => {
    return (
      <>
        <components.Menu {...props}>
          <div className="">{props.children}</div>
        </components.Menu>
      </>
    );
  };

  const Option = (props: any) => {
    return (
      <>
        <components.Option {...props}>
          <div className="flex items-center justify-between">
            {props.data.label}
            {props.isSelected ? <Check color="#05944F" size={16} /> : null}
          </div>
        </components.Option>
      </>
    );
  };

  const NoOptionsMessage = (props: any) => {
    return (
      <>
        <components.NoOptionsMessage {...props}>
          <div className="px-4 body-base-medium py-2 text-grey-500">
            {emptyStateText || 'No options available'}
          </div>
        </components.NoOptionsMessage>
      </>
    );
  };

  const Input = (props: InputProps<IOptionProps, true>) => {
    return (
      <>
        <components.Input {...props}>{props.children}</components.Input>
      </>
    );
  };
  const SelectContainer = (props: any) => {
    return (
      <>
        <components.SelectContainer {...props}>
          {props.children}
        </components.SelectContainer>
        {error && (
          <div className="w-full mt-1 body-base-regular text-red-300 flex items-center">
            <Info size={16} className="mr-1" />
            {error}
          </div>
        )}
      </>
    );
  };

  const Control = ({ children, ...rest }: any) => {
    const { menuIsOpen } = rest.selectProps;
    return (
      <>
        <components.Control
          {...rest}
          className={`${DEFAULT_INPUT_CLASSNAMES} ${
            menuIsOpen ? 'rounded-b-none' : ''
          } ${error && 'border-red-300'} px-0`}
        >
          {leftIcon && (
            <div className="left-1 top-0 w-10 h-10 flex items-center justify-center">
              {leftIcon}
            </div>
          )}{' '}
          {children}
        </components.Control>
      </>
    );
  };

  const ClearIndicator = (props: any) => {
    return (
      <components.ClearIndicator {...props}>
        <X size={16} />
      </components.ClearIndicator>
    );
  };

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDown size={18} className="fill-current" />
      </components.DropdownIndicator>
    );
  };

  const customStyles:
    | StylesConfig<IOptionProps, true, GroupBase<IOptionProps>>
    | undefined = {
    input: (base) => ({
      ...base,
      padding: 0,
      margin: 0,
      width: '50%',
      'input:focus': {
        boxShadow: 'none',
      },
    }),
    container: (base) => ({
      ...base,
      ':focus': {
        boxShadow: 'none',
      },
    }),
    placeholder: (base) => ({
      ...base,
      padding: 0,
      margin: 0,
    }),

    menu: (base) => ({
      ...base,
      borderRadius: 8,
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      overflow: 'hidden',
      boxShadow:
        '0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
      border: '2px solid #e2e2e2',
    }),
    menuList: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#AFAFAF',
      ':hover': {
        color: '#141414',
      },
      ':focus': {
        color: '#141414',
      },
    }),
    clearIndicator: (base) => ({
      ...base,
      color: '#AFAFAF',
      ':hover': {
        color: '#141414',
      },
      ':focus': {
        color: '#141414',
      },
    }),
    option: (base, state) => ({
      ...base,
      paddingTop: 12,
      paddingBottom: 12,
      borderBottom: '1px solid #e2e2e2',
      // eslint-disable-next-line no-nested-ternary
      backgroundColor: state.isFocused
        ? '#F6F6F6'
        : state.isSelected
        ? '#EFF3FE'
        : '',
      color: state.isFocused ? '#333333' : '#757575',
    }),

    valueContainer: (base, state) => ({
      ...base,
      background: state.isDisabled ? '#EEEEEE' : 'white',
      color: '#141414',
      width: '100%',
      padding: 0,
      margin: 0,
    }),
    control: (base, state) => ({
      ...base,
      background: state.isDisabled ? '#EEEEEE' : 'white',
      borderRadius: '8px',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: !leftIcon ? 20 : 0,
      borderBottomLeftRadius: state.menuIsOpen ? '0px' : '8px',
      borderBottomRightRadius: state.menuIsOpen ? '0px' : '8px',
      boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.04)',
      // eslint-disable-next-line no-nested-ternary
      border: state.isFocused
        ? '2px solid #A0BFF8'
        : error
        ? '2px solid #E85C4A'
        : '2px solid #E2E2E2',
      ':hover': {
        border: '2px solid #141414',
        zIndex: 20,
      },
      ':focus': {
        border: '2px solid #A0BFF8',
        zIndex: 10,
        outline: 'none',
        boxShadow: 'none',
      },
    }),
  };

  return (
    <>
      <div className="w-full">
        {labelText ? (
          <label className={`block body-sm whitespace-nowrap mb-1.5`}>
            {labelText}
          </label>
        ) : null}
        <CreatableSelect
          openMenuOnFocus
          closeMenuOnSelect
          maxMenuHeight={customMaxHeight}
          hideSelectedOptions={removeSelectedItemFromList}
          value={defaultSelectedOption}
          isSearchable
          blurInputOnSelect
          onInputChange={(newVal) => {
            onInputChange(newVal);
          }}
          getOptionLabel={(option) => {
            return option.text ?? '';
          }}
          isClearable={isClearable}
          tabSelectsValue={false}
          options={options}
          components={{
            DropdownIndicator,
            ValueContainer,
            Input,
            Control,
            Menu,
            Option,
            NoOptionsMessage,
            ClearIndicator,
            SelectContainer,
          }}
          formatCreateLabel={(value) => {
            return (
              <div className="py-2 body-base-medium text-grey-500">
                <p>{createOptionMessage(value)}</p>
              </div>
            );
          }}
          isDisabled={disabled}
          isLoading={isLoading}
          createOptionPosition="first"
          onCreateOption={(inputValue: string) => {
            createOption(inputValue);
          }}
          placeholder={placeholder}
          onChange={(newValue) => {
            onChange(newValue as unknown as IOptionProps);
          }}
          styles={customStyles}
        />
      </div>
    </>
  );
};
