/// <reference types="react" />
import { UseFormRegister, Control, UseFormSetError, UseFormSetValue, UseFormClearErrors, UseFormResetField, UseFormWatch, UseFormReset, UseFieldArrayAppend } from 'react-hook-form';
import { IDynamicFormProps } from '../hooks/useDynamicFormProps';
export declare type UISchemaSubmitButtonOptions = {
    submitText?: string;
    norender?: boolean;
    props?: {
        disabled?: boolean;
        className?: string;
        [name: string]: any;
    };
};
export declare type Error = {
    [key: string]: any;
    [key: number]: any;
};
export declare type UiSchema = {
    field?: Field | string;
    widget?: Widget | string;
    options?: {
        [key: string]: boolean | number | string | object | any[] | null;
    };
    order?: string[];
    FieldTemplate?: React.FunctionComponent<FieldTemplateProps>;
    ArrayFieldTemplate?: React.FunctionComponent<ArrayFieldTemplateProps>;
    ObjectFieldTemplate?: React.FunctionComponent<ObjectFieldTemplateProps>;
    [name: string]: any;
    submitButtonOptions?: UISchemaSubmitButtonOptions;
};
export declare type FieldId = {
    $id: string;
};
export declare type IdSchema<T = any> = {
    [key in keyof T]: IdSchema<T[key]>;
} & FieldId;
export declare type FieldPath = {
    $name: string;
};
export declare type PathSchema<T = any> = {
    [key in keyof T]: PathSchema<T[key]>;
} & FieldPath;
export interface IBaseWidgetProps extends Pick<React.HTMLAttributes<HTMLElement>, Exclude<keyof React.HTMLAttributes<HTMLElement>, 'onBlur' | 'onFocus'>> {
    id?: string;
    schema: {
        [key: string]: any;
    };
    uiSchema: UiSchema;
    defaultValue?: any;
    required: boolean;
    requiredMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    hideError?: boolean;
    autofocus?: boolean;
    placeholder: string;
    name: string;
    label?: string;
    errors: Error;
    register: UseFormRegister<IDynamicFormProps>;
    control: Control<IDynamicFormProps>;
    setValue: UseFormSetValue<IDynamicFormProps>;
    clearErrors: UseFormClearErrors<IDynamicFormProps>;
    setError: UseFormSetError<IDynamicFormProps>;
    resetField: UseFormResetField<IDynamicFormProps>;
    watch: UseFormWatch<IDynamicFormProps>;
    append?: UseFieldArrayAppend<IDynamicFormProps>;
    options?: {
        [key: string]: any;
    };
    enums?: Array<Record<string, any>>;
    formContext?: any;
    onChange?: (value: any) => void;
    onBlur?: (id: string, value: any) => void;
    onFocus?: (id: string, value: any) => void;
    multiple?: boolean;
    registry: Registry;
    [prop: string]: any;
}
export declare type Widget = React.FC<IBaseWidgetProps>;
export interface Registry {
    fields: {
        [name: string]: Field;
    };
    widgets: {
        [name: string]: Widget;
    };
    definitions: {
        [name: string]: any;
    };
    formContext?: any;
    rootSchema?: {
        [key: string]: any;
    };
    FieldTemplate?: React.FunctionComponent<FieldTemplateProps>;
    ArrayFieldTemplate?: React.FunctionComponent<ArrayFieldTemplateProps>;
    StackFieldTemplate?: React.FunctionComponent<StackFieldTemplateProps>;
    ObjectFieldTemplate?: React.FunctionComponent<ObjectFieldTemplateProps>;
}
export interface IBaseFieldProps<T = any> extends Pick<React.HTMLAttributes<HTMLElement>, Exclude<keyof React.HTMLAttributes<HTMLElement>, 'onBlur' | 'onFocus'>> {
    schema: {
        [key: string]: any;
    };
    uiSchema: UiSchema;
    idSchema?: IdSchema;
    formData?: T;
    errors: Error;
    register: UseFormRegister<IDynamicFormProps>;
    control: Control<IDynamicFormProps>;
    setValue: UseFormSetValue<IDynamicFormProps>;
    clearErrors: UseFormClearErrors<IDynamicFormProps>;
    setError: UseFormSetError<IDynamicFormProps>;
    resetField: UseFormResetField<IDynamicFormProps>;
    reset: UseFormReset<IDynamicFormProps>;
    watch: UseFormWatch<IDynamicFormProps>;
    registry: Registry;
    formContext?: any;
    autofocus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    hideError?: boolean;
    required: boolean;
    requiredMessage?: string;
    name: string;
    label: string;
    options?: {
        [key: string]: any;
    };
    [prop: string]: any;
}
export declare type Field = React.FC<IBaseFieldProps>;
export declare type FieldTemplateProps<T = any> = {
    id?: string;
    classNames: string;
    name: string;
    label?: string;
    description?: React.ReactElement;
    rawDescription?: string;
    children: React.ReactElement;
    errors?: React.ReactElement;
    rawErrors?: string[];
    help?: React.ReactElement;
    rawHelp?: string;
    hidden?: boolean;
    required?: boolean;
    requiredMessage?: string;
    readonly?: boolean;
    disabled?: boolean;
    displayLabel?: boolean;
    fields?: Field[];
    schema: {
        [key: string]: any;
    };
    uiSchema: UiSchema;
    formContext?: any;
    formData?: T;
    onChange?: (value: T) => void;
    registry: Registry;
};
export declare type ArrayFieldTemplateProps<T = any> = {
    DescriptionField?: React.FunctionComponent<{
        id: string;
        description: string | React.ReactElement;
    }>;
    TitleField?: React.FunctionComponent<{
        id: string;
        title: string;
        required: boolean;
    }>;
    canAdd: boolean;
    className: string;
    disabled: boolean;
    idSchema: IdSchema;
    items: {
        children: React.ReactElement;
        className: string;
        disabled: boolean;
        hasMoveDown: boolean;
        hasMoveUp: boolean;
        hasRemove: boolean;
        hasToolbar: boolean;
        index: number;
        onAddIndexClick: (index: number) => (event?: any) => void;
        onDropIndexClick: (index: number) => (event?: any) => void;
        onReorderClick: (index: number, newIndex: number) => (event?: any) => void;
        readonly: boolean;
        key: string;
    }[];
    onAddClick: (event?: any) => void;
    readonly: boolean;
    required: boolean;
    requiredMessage?: string;
    schema: {
        [key: string]: any;
    };
    uiSchema: UiSchema;
    name: string;
    label?: string;
    description?: string;
    formContext?: any;
    formData?: T;
    registry: Registry;
};
export declare type ObjectFieldTemplateProps<T = any> = {
    DescriptionField?: React.FunctionComponent<{
        id: string;
        description: string | React.ReactElement;
    }>;
    TitleField?: React.FunctionComponent<{
        id: string;
        title: string;
        required: boolean;
    }>;
    name: string;
    label?: string;
    description?: string;
    disabled?: boolean;
    properties: {
        content: React.ReactElement;
        name: string;
        disabled: boolean;
        readonly: boolean;
        hidden: boolean;
    }[];
    readonly?: boolean;
    required: boolean;
    requiredMessage?: string;
    schema: {
        [key: string]: any;
    };
    uiSchema: UiSchema;
    idSchema?: IdSchema;
    formData?: T;
    formContext?: any;
    registry: Registry;
};
export declare type StackFieldTemplateProps<T = any> = {
    DescriptionField?: React.FunctionComponent<{
        id: string;
        description: string | React.ReactElement;
    }>;
    TitleField?: React.FunctionComponent<{
        id: string;
        title: string;
        required: boolean;
    }>;
    name: string;
    label?: string;
    description?: string;
    disabled?: boolean;
    properties: {
        content: React.ReactElement;
        name: string;
        disabled: boolean;
        readonly: boolean;
        hidden: boolean;
    }[];
    readonly?: boolean;
    required: boolean;
    requiredMessage?: string;
    schema: {
        [key: string]: any;
    };
    uiSchema: UiSchema;
    idSchema?: IdSchema;
    formData?: T;
    formContext?: any;
    registry: Registry;
    hasCustomWidget: boolean;
    CustomWidget: Widget;
    appendFields: () => void;
    addable?: boolean;
    layout?: string;
};
export declare type ArrayFieldTemplatePropsNew<T = any> = {
    DescriptionField?: React.FunctionComponent<{
        id: string;
        description: string | React.ReactElement;
    }>;
    TitleField?: React.FunctionComponent<{
        id: string;
        title: string;
        required: boolean;
    }>;
    name: string;
    label?: string;
    description?: string;
    disabled?: boolean;
    properties: {
        content: React.ReactElement;
        name: string;
        disabled: boolean;
        readonly: boolean;
        hidden: boolean;
    }[];
    readonly?: boolean;
    required: boolean;
    requiredMessage?: string;
    schema: {
        [key: string]: any;
    };
    uiSchema: UiSchema;
    idSchema?: IdSchema;
    formData?: T;
    formContext?: any;
    registry: Registry;
    appendFields: () => void;
    addable?: boolean;
    layout?: string;
};
