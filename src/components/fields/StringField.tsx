import { FC } from 'react';

import { getWidget } from '../../util/formUtils';
import { IBaseFieldProps } from '../../lib/types';

const StringField: FC<IBaseFieldProps> = ({
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
  required,
  watch,
  options,
  name,
}) => {
  const { widgets } = registry;
  const widget = uiSchema.widget || 'text';

  const schemaName = schema.name || uiSchema.name || name;
  const label = uiSchema.title || schema.label || '';
  const placeholder = uiSchema.placeholder || schema.placeholder || '';
  const fieldOptions = uiSchema.options || options || [];

  const fieldEnums = schema.enums || [];
  const fieldRequired = schema.required || required || false;
  const requiredMessage = schema.requiredMessage || 'This field is required';
  const hideFieldError = options?.hideError || hideError || false;
  const disabledField = fieldOptions?.readonly || options?.readonly || disabled || false;
  const defaultValue = schema?.defaultValue || '';

  const Widget = getWidget(schema, widget, widgets);

  return (
    <Widget
      id={schema.$id}
      schema={schema}
      uiSchema={uiSchema}
      disabled={disabledField}
      errors={errors}
      register={register}
      control={control}
      setError={setError}
      setValue={setValue}
      clearErrors={clearErrors}
      resetField={resetField}
      readonly={readonly}
      hideError={hideFieldError}
      required={fieldRequired}
      requiredMessage={requiredMessage}
      watch={watch}
      name={schemaName}
      label={label}
      placeholder={placeholder}
      registry={registry}
      options={fieldOptions}
      enums={fieldEnums}
      defaultValue={defaultValue}
    />
  );
};

export default StringField;
