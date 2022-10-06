import { useInitForm } from './useInitForm';

export interface IDynamicFormProps {
  [key: string]: any;
}
export const useDynamicForm = (defaultValues?: IDynamicFormProps) => {
  const values = useInitForm<IDynamicFormProps>({
    defaultValues: defaultValues || {},
    mode: 'onSubmit',
  });
  return values;
};
