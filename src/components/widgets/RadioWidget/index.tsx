import { FC } from 'react';

import { RadioCardSmall, RadioCardGroups } from '../../Input';
import { IDynamicFormProps } from '../../../hooks/useDynamicFormProps';
import { IBaseWidgetProps } from '../../../lib/types';

export const RadioWidget: FC<IBaseWidgetProps> = ({
  errors,
  control,
  hideError,
  name,
  label,
  required,
  requiredMessage,
  enums,
}) => {
  return (
    <div className="w-full my-6">
      <div className="w-full">
        <div className="">
          <RadioCardGroups<IDynamicFormProps>
            error={hideError ? undefined : errors[name]?.message}
            label={label || ''}
            SelectorComponent={RadioCardSmall}
            inputNameProp="employment-type"
            control={{
              control,
              name,
              rules: {
                required: required ? requiredMessage : false,
              },
            }}
            options={
              enums?.map((ele: any) => {
                return {
                  label: ele.optionLabel,
                  icon: ele.icon,
                  value: ele.optionValue,
                  text: ele.optionLabel,
                  // selectedBorderClasses: '',
                  subtext: null,
                };
              }) as any
            }
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
