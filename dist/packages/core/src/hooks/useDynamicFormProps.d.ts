export interface IDynamicFormProps {
    [key: string]: any;
}
export declare const useDynamicForm: (defaultValues?: IDynamicFormProps | undefined) => import("react-hook-form").UseFormReturn<IDynamicFormProps, any>;
