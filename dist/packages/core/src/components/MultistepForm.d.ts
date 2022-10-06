import React, { FC } from 'react';
import { SubmitErrorHandler, SubmitHandler, ChangeHandler } from 'react-hook-form';
import { IDynamicFormProps } from '../hooks/useDynamicFormProps';
import { UiSchema, Field, Widget, FieldTemplateProps, ArrayFieldTemplateProps, StackFieldTemplateProps, ObjectFieldTemplateProps } from '../lib/types';
export interface IMultiStepProps {
    acceptcharset?: string;
    action?: string;
    additionalMetaSchemas?: ReadonlyArray<object>;
    ArrayFieldTemplate?: React.FunctionComponent<ArrayFieldTemplateProps>;
    autoComplete?: string;
    autocomplete?: string;
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
    Fields?: {
        [name: string]: Field;
    };
    FieldTemplate?: React.FunctionComponent<FieldTemplateProps>;
    formContext?: any;
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
    schema: {
        [key: string]: any;
    };
    showErrorList?: boolean;
    tagName?: React.ElementType;
    target?: string;
    uiSchema: UiSchema;
    useJsonSchema: boolean;
    Widgets?: {
        [name: string]: Widget;
    };
    isSubmitting?: boolean;
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}
declare const MultistepForm: FC<IMultiStepProps>;
export default MultistepForm;
