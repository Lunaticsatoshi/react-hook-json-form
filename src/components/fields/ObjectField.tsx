import { FC, useMemo } from 'react';

import { orderProperties } from '../../util/formUtils';
import { IBaseFieldProps, ObjectFieldTemplateProps } from '../../lib/types';

export const DefaultObjectFieldTemplate: FC<ObjectFieldTemplateProps> = ({
  label,
  description,
  TitleField,
  DescriptionField,
  properties,
  required,
}) => {
  return (
    <div>
      <div className="my-9 w-full">
        {TitleField ? (
          <TitleField id={''} title={label || ''} required={required} />
        ) : (
          <div className="flex items-center  w-full">
            <span className="text-xl font-bold">{label}</span>
            {required && (
              <span className="subtitle-xs text-grey-400 ml-auto">
                * Required
              </span>
            )}
          </div>
        )}
        {DescriptionField ? (
          <DescriptionField id={''} description={description || ''} />
        ) : (
          <div className="flex items-center">
            <span className="text-md font-medium text-grey-400">
              {description}
            </span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-4">
        {properties.map((element: any, index: number) => (
          <div key={index} className="col-span-4 mb-6">
            {element.content}
          </div>
        ))}
      </div>
    </div>
  );
};

const ObjectField: FC<IBaseFieldProps> = ({
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
  required,
  requiredMessage,
  watch,
  name,
}) => {
  const { fields } = registry;
  const SchemaField: any = fields.SchemaField;
  const schemaName = name || schema.name || uiSchema.name;
  const fieldRequired = schema.required || required || false;
  const fieldRequiredMessage =
    schema.requiredMessage || requiredMessage || 'This section is required';
  const label = uiSchema.label || schema.label || '';
  const description = uiSchema.description || schema.description || '';
  const order = uiSchema.order || [];
  const fieldOptions = uiSchema.options || options || {};
  const hideFieldError = options?.hideError || hideError;
  let orderedProperties = [];

  const ObjectFieldTemplate = useMemo(() => {
    return uiSchema.ObjectFieldTemplate ||
    registry.ObjectFieldTemplate ||
    DefaultObjectFieldTemplate;
  }, [uiSchema, registry]);

  try {
    const properties = Object.keys(schema.properties || {});
    orderedProperties = orderProperties(properties, order);
  } catch (err: any) {
    return (
      <div>
        <p className="config-error" style={{ color: 'red' }}>
          Invalid {name || 'root'} object field configuration:
          <em>{err.message}</em>.
        </p>
        <pre>{JSON.stringify(schema)}</pre>
      </div>
    );
  }

  // console.log('schema', schema);
  // console.log('uiSchema', uiSchema);

  // const ObjectFieldTemplate =
  //   uiSchema.ObjectFieldTemplate ||
  //   registry.ObjectFieldTemplate ||
  //   DefaultObjectFieldTemplate;

  const objectFieldTemplateProps = {
    name,
    label,
    description,
    properties: orderedProperties.map((property) => {
      const fieldUiSchema = uiSchema[property];
      const hidden = fieldUiSchema && fieldUiSchema.widget === 'hidden';
      return {
        content: (
          <SchemaField
            schema={schema.properties[property]}
            uiSchema={fieldUiSchema}
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
            requiredMessage={fieldRequiredMessage}
            registry={registry}
            watch={watch}
            name={schemaName}
            options={fieldOptions}
            hideError={hideFieldError}
            label={label}
            hidden={hidden}
          />
        ),
        name: name || '',
        disabled: disabled || false,
        readonly: readonly || false,
        hidden: hidden || false,
      };
    }),
    readonly,
    disabled,
    required: fieldRequired,
    schema,
    uiSchema,
    registry,
  };

  return <ObjectFieldTemplate {...objectFieldTemplateProps} />;
};

export default ObjectField;
