import { FC } from 'react';

import { getWidget } from '../../../util/formUtils';
import { IBaseWidgetProps } from '../../../lib/types';

export const StackWidget: FC<IBaseWidgetProps> = ({
  schema,
  uiSchema,
  registry,
  disabled,
  errors,
  register,
  control,
  setError,
  setValue,
  clearErrors,
  resetField,
  readonly,
  hideError,
  watch,
  name,
  required,
  hidden,
  requiredMessage,
  defaultValue,
}) => {
  const { widgets } = registry;
  const widget = uiSchema.widget || 'text';

  const Widget = getWidget(schema, widget, widgets);

  const label = uiSchema.label || schema.label || '';
  const placeholder = uiSchema.placeholder || schema.placeholder || '';
  const options = uiSchema.options || [];
  const fieldEnums = schema.enums || [];
  const fieldRequired = schema.required || required || false;
  const fieldRequiredMessage = schema.requiredMessage || requiredMessage;
  return (
    <Widget
      schema={schema}
      uiSchema={uiSchema}
      disabled={disabled}
      errors={errors}
      register={register}
      control={control}
      setError={setError}
      setValue={setValue}
      clearErrors={clearErrors}
      resetField={resetField}
      readonly={readonly}
      required={fieldRequired}
      hideError={hideError}
      requiredMessage={fieldRequiredMessage}
      registry={registry}
      watch={watch}
      name={name}
      label={label}
      hidden={hidden}
      options={options}
      enums={fieldEnums}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};
