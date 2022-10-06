import { FC, useState, useEffect, useMemo } from 'react';
import { useFieldArray } from 'react-hook-form';
import { Plus } from 'phosphor-react';

import { orderProperties, getWidget, isCustomWidget } from '../../util/formUtils';
// import { createDynamicHookFormSchema } from '../../util/createDynamcHookFormSchema';
import { IBaseFieldProps, StackFieldTemplateProps } from '../../lib/types';

export const DefaultStackFieldTemplate: FC<StackFieldTemplateProps> = ({
  label,
  description,
  TitleField,
  DescriptionField,
  properties,
  required,
  appendFields,
  addable,
  hasCustomWidget,
  CustomWidget
}) => {
  return (
    <div>
      <div className="w-full">
        {TitleField ? (
          <TitleField id={''} title={label || ''} required={required} />
        ) : (
          <div className="flex items-center  w-full">
            <span className="font-bold text-sm">{label}</span>
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
            <span className="text-xs font-medium text-grey-400">
              {description}
            </span>
          </div>
        )}
      </div>
      <div>
        {hasCustomWidget ? <>{CustomWidget}</> : properties.map((element: any, index: number) => (
          <div key={index}>{element.content}</div>
        ))}
      </div>
      {addable && (
        <div
          className="bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-600 text-white focus:border-white focus:bg-blue-500 relative hover:cursor-pointer inline-flex items-center justify-center transition ease-linear border-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full px-4 py-3 rounded-lg mt-2"
          onClick={appendFields}
        >
          <Plus size={12} />
          <span className="text">Add Dependents</span>
        </div>
      )}
    </div>
  );
};

const StackField: FC<IBaseFieldProps> = ({
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
  requiredMessage,
  watch,
}) => {
  const { widgets } = registry;
  const [hasCustomWidget, setHasCustomWidget] = useState(false);
  const name = schema.name;
  const label = schema.label || uiSchema.label || '';
  const description = uiSchema.description || schema.description || '';
  const fieldRequired = schema.required || required || false;
  const fieldRequiredMessage =
    schema.requiredMessage || requiredMessage || 'This section is required';
  const order = uiSchema.order || [];
  const options = uiSchema.options || {};
  const addable = options.addable || false;
  const layout = options.layout || 'vertical';
  const fieldDisabled = options?.readonly || disabled || false;
  const hideFieldError = options.hideError || hideError || false;
  let orderedProperties: Array<string> = [];

  const { fields: fieldsArray, append } = useFieldArray({
    control,
    name: schema.name,
    keyName: `${schema.name}Id`,
  });
  const widget = uiSchema.widget || 'text';
  useEffect(() => {
    const customWidgetPresent = isCustomWidget(schema, widget, widgets);
    if (customWidgetPresent) {
      setHasCustomWidget(customWidgetPresent);
    } else {
      setHasCustomWidget(false);
      const properties = Object.keys(schema.properties).reduce((acc, curr) => {
        if(uiSchema.stackFields[curr].widget === 'name') {
          return { ...acc, firstName: '', lastName: '' };
        }
        return { ...acc, [curr]: '' };
      }, {});
      append(properties);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const StackFieldTemplate = useMemo(() => {
    return uiSchema.StackFieldTemplate ||
    registry.StackFieldTemplate ||
    DefaultStackFieldTemplate;
  }, [uiSchema, registry]);

  const appendFields = () => {
    const properties = Object.keys(schema.properties).reduce((acc, curr) => {
      if(uiSchema.stackFields[curr].widget === 'name') {
        return { ...acc, firstName: '', lastName: '' };
      }
      return { ...acc, [curr]: '' };
    }, {});
    append(properties);
  };

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

  const Widget = getWidget(schema, widget, widgets);

  const stackFieldTemplateProps = {
    name,
    label,
    description,
    properties: fieldsArray.map((_fieldsArray, fieldArrayIndex) => {
      return {
        content: (
          <div
            className="my-4 grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-4"
            key={fieldArrayIndex}
          >
            {orderedProperties.map((property, index) => {
              const fieldUiSchema = uiSchema.stackFields[property];
              const hidden = fieldUiSchema && fieldUiSchema.widget === 'hidden';
              return (
                <div
                  className={`${
                    layout === 'vertical' ? 'col-span-2' : 'col-span-1'
                  }`}
                  key={index}
                >
                  <Widget
                    id={schema.properties[property]?.$id}
                    schema={schema.properties[property]}
                    uiSchema={fieldUiSchema}
                    disabled={fieldDisabled as any}
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
                    hideError={hideFieldError as any}
                    registry={registry}
                    watch={watch}
                    name={`${schema.name}[${fieldArrayIndex}].${property}`}
                    label={label}
                    hidden={hidden}
                    placeholder={''}
                  />
                </div>
              );
            })}
          </div>
        ),
      };
    }),
    readonly,
    disabled,
    required: fieldRequired,
    appendFields,
    addable,
    hasCustomWidget,
    CustomWidget: (
      <Widget
      id={schema?.$id}
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
      requiredMessage={fieldRequiredMessage}
      hideError={hideFieldError as any}
      registry={registry}
      watch={watch}
      name={schema.name}
      label={label}
      hidden={false}
      placeholder={''}
      append={append}
    />
    )
  };

  return <StackFieldTemplate {...stackFieldTemplateProps} />;
};

export default StackField;
