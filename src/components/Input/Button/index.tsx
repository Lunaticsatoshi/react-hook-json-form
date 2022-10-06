import React, { forwardRef } from 'react';

export interface IButtonFilledProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: 'primary' | 'secondary' | 'accent' | 'warning' | '';
  label: string;
  size?: 'small' | 'medium' | 'large' | 'regular';
  customClasses?: string;
  disabled?: boolean;
  onClick?: (arg0: React.MouseEvent<HTMLButtonElement>) => void;
}

const getFilledTypeClass = (type: IButtonFilledProps['styleType']) => {
  switch (type) {
    case 'primary':
      return 'bg-grey-900 border-grey-800 hover:bg-grey-700 text-white focus:border-white focus:bg-grey-700';
    case 'secondary':
      return 'bg-grey-50 border-grey-100 hover:bg-grey-200 hover:border-grey-100 text-abbadon focus:border-white focus:bg-grey-200';
    case 'accent':
      return 'bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-600 text-white focus:border-white focus:bg-blue-500';
    case 'warning':
      return 'bg-red-400 border-red-500 hover:bg-red-600 hover:border-red-500 text-white focus:border-white focus:bg-red-600';
    default:
      return '';
  }
};

const getOutlineTypeClass = (type: IButtonFilledProps['styleType']) => {
  switch (type) {
    case 'primary':
      return 'bg-white border-grey-200 hover:border-grey-700 focus:border-grey-700 text-abbadon';
    case 'accent':
      return 'bg-white border-grey-200 hover:border-blue-400 focus:border-grey-200 focus:border-grey-700 text-blue-600';
    case 'warning':
      return 'bg-white border-grey-200 hover:border-red-300 focus:border-grey-200 focus:border-grey-700 text-red-500';
    default:
      return '';
  }
};

export const BUTTON_SIZING = 'px-4 py-3 rounded-lg';
export const DEFAULT_BUTTON_CLASSES =
  'relative hover:cursor-pointer inline-flex items-center justify-center transition ease-linear border-2 focus:outline-none focus:ring-2 focus:ring-blue-200';

export const DISABLED_FILLED_BUTTON_CLASSES =
  'disabled:bg-gray-100 disabled:text-gray-400 disabled:border disabled:border-transparent disabled:cursor-not-allowed';
export const DISABLED_OUTLINE_BUTTON_CLASSES =
  'disabled:bg-white disabled:text-gray-400 disabled:border-2 disabled:border-grey-200 disabled:cursor-not-allowed';

export const BTN_SIZES = {
  medium: BUTTON_SIZING,
  regular: 'py-2.5 px-3.5 rounded-lg',
  small: 'py-2 px-3.5 rounded-lg',
  large: '',
};

// deprecated
export const ButtonFilled = ({
  styleType,
  label,
  customClasses = '',
  size = 'medium',
  ...props
}: IButtonFilledProps) => {
  const typeClasses = getFilledTypeClass(styleType);
  return (
    <button
      className={`${typeClasses} ${DEFAULT_BUTTON_CLASSES} ${BTN_SIZES[size]} ${DISABLED_FILLED_BUTTON_CLASSES} ${customClasses}`}
      {...props}
    >
      <span className="leading-4 text-sm">{label}</span>
    </button>
  );
};

// deprecated
export const ButtonFilledWithLeftIcon = ({
  styleType,
  label,
  customClasses = '',
  leftIcon,
  size = 'medium',
  ...props
}: IButtonFilledProps & { leftIcon: React.ReactNode }) => {
  const typeClasses = getFilledTypeClass(styleType);
  return (
    <button
      className={`${typeClasses} ${DEFAULT_BUTTON_CLASSES}  ${BTN_SIZES[size]}  ${DISABLED_FILLED_BUTTON_CLASSES} ${customClasses}`}
      {...props}
    >
      {leftIcon}
      <span className="pl-2 leading-4 text-sm">{label}</span>
    </button>
  );
};

export const ButtonFilledWithRightIcon = ({
  styleType,
  label,
  customClasses = '',
  rightIcon,
  size = 'medium',
  ...props
}: IButtonFilledProps & { rightIcon: React.ReactNode }) => {
  const typeClasses = getFilledTypeClass(styleType);
  return (
    <button
      className={`${typeClasses} ${DEFAULT_BUTTON_CLASSES} ${BTN_SIZES[size]} ${DISABLED_FILLED_BUTTON_CLASSES} ${customClasses}`}
      {...props}
    >
      <span className="pr-2 leading-4 text-sm">{label}</span>
      {rightIcon}
    </button>
  );
};

export const ButtonOutline = ({
  styleType,
  label,
  customClasses = '',
  size = 'medium',
  ...props
}: IButtonFilledProps & { styleType: 'primary' | 'accent' | 'warning' }) => {
  const typeClasses = getOutlineTypeClass(styleType);
  return (
    <button
      className={`${typeClasses} ${DEFAULT_BUTTON_CLASSES} ${BTN_SIZES[size]} ${DISABLED_OUTLINE_BUTTON_CLASSES} ${customClasses}`}
      {...props}
    >
      <span className="leading-4 text-sm">{label}</span>
    </button>
  );
};

export const ButtonOutlineWithLeftIcon = ({
  styleType,
  label,
  customClasses = '',
  leftIcon,
  size = 'medium',
  ...props
}: IButtonFilledProps & {
  styleType: 'primary' | 'accent' | 'warning';
  leftIcon: React.ReactNode;
}) => {
  const typeClasses = getOutlineTypeClass(styleType);
  return (
    <button
      className={`${typeClasses} ${DEFAULT_BUTTON_CLASSES} ${BTN_SIZES[size]} ${DISABLED_OUTLINE_BUTTON_CLASSES} ${customClasses}`}
      {...props}
    >
      {leftIcon}
      <span className="pl-2 leading-4 text-sm">{label}</span>
    </button>
  );
};

export const ButtonOutlineWithRightIcon = ({
  styleType,
  label,
  customClasses = '',
  rightIcon,
  size = 'medium',
  ...props
}: IButtonFilledProps & {
  styleType: 'primary' | 'accent' | 'warning';
  rightIcon: React.ReactNode;
}) => {
  const typeClasses = getOutlineTypeClass(styleType);
  return (
    <button
      className={`${typeClasses} ${DEFAULT_BUTTON_CLASSES} ${BTN_SIZES[size]} ${DISABLED_OUTLINE_BUTTON_CLASSES} ${customClasses}`}
      {...props}
    >
      <span className="pr-2 leading-4 text-sm">{label}</span>
      {rightIcon}
    </button>
  );
};

export const IconButtonFilled = forwardRef<any, any>(
  (
    {
      styleType,
      label,
      customClasses = '',
      ...props
    }: Omit<IButtonFilledProps, 'label'> & {
      label: React.ReactElement<SVGSVGElement>;
    },
    ref,
  ) => {
    const typeClasses = getFilledTypeClass(styleType);
    return (
      <button
        ref={ref}
        className={`${typeClasses} ${DEFAULT_BUTTON_CLASSES} ${DISABLED_FILLED_BUTTON_CLASSES} rounded-full px-2 py-2 ${customClasses}`}
        {...props}
      >
        {label}
      </button>
    );
  },
);

IconButtonFilled.displayName = 'IconButtonFilled';

export const IconButtonOutline = forwardRef<any, any>(
  (
    {
      styleType,
      label,
      customClasses = '',
      ...props
    }: Omit<IButtonFilledProps, 'label' | 'styleType'> & {
      label: React.ReactElement<SVGSVGElement>;
      styleType: 'primary' | 'accent' | 'warning';
    },
    ref,
  ) => {
    const typeClasses = getOutlineTypeClass(styleType);
    return (
      <button
        ref={ref}
        className={`${typeClasses} ${DEFAULT_BUTTON_CLASSES} ${DISABLED_OUTLINE_BUTTON_CLASSES} rounded-full px-2 py-2 ${customClasses}`}
        {...props}
      >
        {label}
      </button>
    );
  },
);

IconButtonOutline.displayName = 'IconButtonOutline';
