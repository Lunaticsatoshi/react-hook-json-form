import React, { FC } from 'react';

import { COMPONENT_TYPES, getSchemaType } from '../../util/formUtils';
import UnsupportedField from './UnsupportedField';
import { UiSchema, Field, IBaseFieldProps } from '../../lib/types';

export type DefaultTemplateProps = {
  classNames: string;
  children?: React.ReactNode;
  hidden?: boolean;
};

const getFieldComponent = (
  schema: any,
  uiSchema: UiSchema,
  fields: any,
): Field => {
  const { field } = uiSchema;
  if (typeof field === 'function') {
    return field;
  }
  if (typeof field === 'string' && field in fields) {
    return fields[field];
  }

  const schemaType = getSchemaType(schema);
  const fieldName = COMPONENT_TYPES[schemaType];

  if (!fieldName) {
    // eslint-disable-next-line react/display-name
    return () => null;
  }

  if (fieldName in fields) {
    return fields[fieldName];
  }

  // eslint-disable-next-line react/display-name
  return () => (
    <UnsupportedField
      schema={schema}
      reason={`unknown Field type ${schema.type}`}
    />
  );
};

const DefaultTemplate = (props: DefaultTemplateProps) => {
  const { classNames, children, hidden } = props;
  if (hidden) {
    return <div className="hidden">{children}</div>;
  }

  return <div className={classNames}>{children}</div>;
};

const SchemaField: FC<IBaseFieldProps> = ({
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
  options,
  reset,
  watch,
  hidden,
  name,
  required,
  requiredMessage,
}) => {
  const { fields } = registry;
  const FieldComponent = getFieldComponent(schema, uiSchema, fields);
  const FieldTemplate =
    uiSchema.FieldTemplate || registry.FieldTemplate || DefaultTemplate;
  const schemaName = schema.name || uiSchema.name;
  const label = uiSchema.label || schema.label || '';
  const classNames = uiSchema.classNames || '';
  const FieldProps = {
    classNames,
    schema,
    uiSchema,
    label,
    registry,
    name,
    hidden,
  };
  // console.log('schema', schema);
  // console.log('uiSchema', uiSchema);

  const field = (
    <FieldComponent
      schema={schema}
      uiSchema={{ ...uiSchema, classNames: undefined }}
      disabled={disabled}
      errors={errors}
      register={register}
      control={control}
      setError={setError}
      setValue={setValue}
      clearErrors={clearErrors}
      resetField={resetField}
      reset={reset}
      readonly={readonly}
      required={required}
      reason={''}
      registry={registry}
      watch={watch}
      name={schemaName}
      label={label}
      hideError={hideError}
      options={options}
      requiredMessage={requiredMessage}
    />
  );
  return <FieldTemplate {...FieldProps}>{field}</FieldTemplate>;
};

export default SchemaField;
