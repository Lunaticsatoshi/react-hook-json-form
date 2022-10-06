import React, { FC, useState, useEffect } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';
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
import { createDynamicHookFormSchema, createDynamicHookFormSchemaFromJson } from '../util/createDynamcHookFormSchema';
import { createUISchema } from '../util/createUIschema';
import { getDefaultRegistry } from '../util/defaultRegistry';
import classNames from '../lib/classNames';
import {
  UiSchema,
  Field,
  Widget,
  FieldTemplateProps,
  ArrayFieldTemplateProps,
  StackFieldTemplateProps,
  ObjectFieldTemplateProps,
} from '../lib/types';

export interface IMultiStepProps {
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
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const MultistepForm: FC<IMultiStepProps> = ({
  idPrefix,
  idSeparator,
  tagName,
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
  useJsonSchema,
  currentStep,
  setCurrentStep,
}) => {
  const [jsonSchema, setJsonSchema] = useState<Record<string, any>>({});
  const [formUiSchema, setFormUiSchema] = useState<Record<string, any>>({});
  const [dynamicHookFormSchema, setDynamicHookFormSchema] =
    useState<Record<string, any>>();
  const [properties, setProperties] = useState<string[]>([]);
  // const [activeProperty, setActiveProperty] = useState('');
  // const [compState, setComp] = useState(0);

  const getStep = (defaultIndex: number, newIndex: number, length: number) => {
    if (newIndex <= length) {
      return newIndex;
    }
    return defaultIndex;
  };

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

  useEffect(() => {
    const schemaProperties = Object.keys(jsonSchema.properties || {});
    if (schemaProperties && schemaProperties.length > 0) {
      setProperties(schemaProperties);
      const activeStep = getStep(0, 0, schemaProperties.length);
      setCurrentStep(activeStep);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsonSchema]);

  // const handleActivePropertyChange = (index: number) => {
  //   console.log('changing', index);
  //   if (index > properties.length || index < properties.length) {
  //     setActiveProperty(properties[0] || '');
  //   } else {
  //     setActiveProperty(properties[index] || '');
  //   }
  // };

  const setStepState = (indx: number) => {
    setCurrentStep(() => (indx < properties.length ? indx : currentStep));
  };

  const next = () => setStepState(currentStep + 1);
  const previous = () =>
    setStepState(currentStep > 0 ? currentStep - 1 : currentStep);

  //   console.log('schema', jsonSchema);
  //   console.log('UISchema', formUiSchema);
  // console.log('dynamicHookFormSchema', dynamicHookFormSchema);

  const {
    register,
    control,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    resetField,
    watch,
    reset,
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

  const label = name || uiSchema.title || schema.title || schema.id || '';

  const _SchemaField = registry.fields.SchemaField;

  const FormTag = tagName || 'form';
  return (
    <div>
      <div className="mb-10 flex justify-start items-center">
        <div className="mx-2" onClick={previous}>
          <CaretLeft size={20} />
        </div>
        <div className="mx-2" onClick={next}>
          <CaretRight size={20} />
        </div>
      </div>
      <FormTag className={classNames('max-w-lg w-full mx-auto ', className)}>
        {properties &&
          properties.map((propertyName, index) => (
            <div className="w-full sm:px-3 px-5" key={index}>
              <div className={`${currentStep === index ? 'block' : 'hidden'}`}>
                <_SchemaField
                  schema={jsonSchema.properties[propertyName]}
                  uiSchema={formUiSchema[propertyName]}
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
              </div>
            </div>
          ))}
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
    </div>
  );
};
export default MultistepForm;
