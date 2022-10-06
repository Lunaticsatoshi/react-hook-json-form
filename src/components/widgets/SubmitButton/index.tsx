import { FC } from 'react';

import { ButtonFilled } from '../../Input/Button';
import { IBaseWidgetProps } from '../../../lib/types';

export const SubmitButtomFilled: FC<IBaseWidgetProps> = ({
  disabled,
  label,
}) => {
  return (
    <ButtonFilled
      label={label || ''}
      onClick={() => {}}
      styleType="primary"
      disabled={disabled}
    />
  );
};
