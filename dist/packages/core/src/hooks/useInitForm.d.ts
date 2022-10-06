import { DeepPartial, Mode } from "react-hook-form";
export interface IInitFormProps<T> {
    defaultValues: DeepPartial<T> | undefined;
    mode?: Mode;
}
export declare const useInitForm: <T>({ defaultValues, mode, }: IInitFormProps<T>) => import("react-hook-form").UseFormReturn<T, any>;
