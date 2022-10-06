import React, { FC, useState, useEffect } from 'react';
import {
  SubmitErrorHandler,
  SubmitHandler,
  ChangeHandler,
} from 'react-hook-form';

import { ButtonFilled } from './Input/Button';
import {
  useDynamicForm,
  IDynamicFormProps,
} from '../hooks/useDynamicFormProps';
import { createJsonSchema } from '../util/createJsonSchema';
import { createUISchema } from '../util/createUIschema';
import { createDynamicHookFormSchema, createDynamicHookFormSchemaFromJson } from '../util/createDynamcHookFormSchema';
import { getDefaultRegistry } from '../util/defaultRegistry';
import classNames from '../lib/classNames';
import {
  UiSchema,
  Field,
  Widget,
  FieldTemplateProps,
  ArrayFieldTemplateProps,
  ObjectFieldTemplateProps,
  StackFieldTemplateProps,
} from '../lib/types';

import '../styles/form.css';

export interface IFormProps {
  acceptcharset?: string;
  action?: string;
  additionalMetaSchemas?: ReadonlyArray<object>;
  ArrayFieldTemplate?: React.FunctionComponent<ArrayFieldTemplateProps>;
  autoComplete?: string;
  autocomplete?: string; // deprecated
  children?: React.ReactNode;
  className?: string;
  customFormats?: {
    [k: string]: string | RegExp | ((data: string) => boolean);
  };
  disabled?: boolean;
  readonly?: boolean;
  hideError?: boolean;
  enctype?: string;
  extraErrors?: any;
  // errors?: Error[];
  Fields?: { [name: string]: Field };
  FieldTemplate?: React.FunctionComponent<FieldTemplateProps>;
  formContext?: any;
  // formData?: T;
  id?: string;
  idPrefix?: boolean;
  idSeparator?: string;
  liveOmit?: boolean;
  liveValidate?: boolean;
  method?: string;
  name?: string;
  noHtml5Validate?: boolean;
  noValidate?: boolean;
  ObjectFieldTemplate?: React.FunctionComponent<ObjectFieldTemplateProps>;
  StackFieldTemplate?: React.FunctionComponent<StackFieldTemplateProps>;
  omitExtraData?: boolean;
  onBlur?: (id: string, value: any) => void;
  onChange?: ChangeHandler;
  onError?: SubmitErrorHandler<IDynamicFormProps>;
  onFocus?: (id: string, value: any) => void;
  onSubmit: SubmitHandler<IDynamicFormProps>;
  schema: { [key: string]: any };
  showErrorList?: boolean;
  tagName?: React.ElementType;
  target?: string;
  uiSchema: UiSchema;
  useJsonSchema: boolean;
  Widgets?: { [name: string]: Widget };
  isSubmitting?: boolean;
}

const Form: FC<IFormProps> = ({
  idPrefix,
  idSeparator,
  tagName,
  useJsonSchema,
  children,
  className,
  name,
  schema,
  uiSchema,
  onSubmit,
  onError,
  isSubmitting,
  Fields,
  Widgets,
  ArrayFieldTemplate,
  ObjectFieldTemplate,
  FieldTemplate,
}) => {
  const [jsonSchema, setJsonSchema] = useState({});
  const [formUiSchema, setFormUiSchema] = useState({});
  const [dynamicHookFormSchema, setDynamicHookFormSchema] =
    useState<Record<string, any>>();

  useEffect(() => {
    if (useJsonSchema) {
      setJsonSchema(schema);
      setFormUiSchema(uiSchema);
      const hookSchema = createDynamicHookFormSchemaFromJson(schema);
      setDynamicHookFormSchema(hookSchema);
      return;
    }
    const formSchema = createJsonSchema(schema, idPrefix, idSeparator);
    const hookFormSchema = createDynamicHookFormSchema(schema, idPrefix, idSeparator);
    const formUISchema = createUISchema(uiSchema, idPrefix, idSeparator);

    setJsonSchema(formSchema);
    setDynamicHookFormSchema(hookFormSchema);
    setFormUiSchema(formUISchema);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schema, uiSchema]);

  // console.log('schema', jsonSchema);
  // console.log('UISchema', formUiSchema);
  // console.log('dynamicHookFormSchema', dynamicHookFormSchema);

  const {
    register,
    control,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    resetField,
    reset,
    watch,
    formState: { errors },
  } = useDynamicForm(dynamicHookFormSchema);

  const getRegistry = () => {
    // For BC, accept passed SchemaField and TitleField props and pass them to
    // the "fields" registry one.
    const { fields, widgets } = getDefaultRegistry();
    return {
      fields: { ...fields, ...Fields },
      widgets: { ...widgets, ...Widgets },
      ArrayFieldTemplate,
      ObjectFieldTemplate,
      FieldTemplate,
      definitions: schema.definitions || {},
      rootSchema: schema,
    };
  };

  const registry = getRegistry();

  const label = name || uiSchema.label || schema.label || schema.id || '';

  const _SchemaField = registry.fields.SchemaField;

  const FormTag = tagName || 'form';
  return (
    <FormTag className={classNames('', className)}>
      <_SchemaField
        schema={jsonSchema}
        uiSchema={formUiSchema}
        errors={errors}
        registry={registry}
        register={register}
        control={control}
        setError={setError}
        setValue={setValue}
        clearErrors={clearErrors}
        resetField={resetField}
        reset={reset}
        watch={watch}
        required={false}
        name={name || ''}
        label={label}
      />
      {children ? (
        children
      ) : (
        <div className="mb-10">
          <div className="w-full mt-8">
            <ButtonFilled
              styleType="primary"
              onClick={handleSubmit(onSubmit, onError)}
              label={!isSubmitting ? 'Continue' : 'Submitting'}
              customClasses="w-full"
              disabled={isSubmitting}
            />
          </div>
        </div>
      )}
    </FormTag>
  );
};
export default Form;
