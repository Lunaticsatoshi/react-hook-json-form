import { DeepPartial, Mode, useForm } from "react-hook-form";

export interface IInitFormProps<T> {
  defaultValues: DeepPartial<T> | undefined;
  mode?: Mode;
}

export const useInitForm = <T>({
  defaultValues,
  mode = "onChange",
}: IInitFormProps<T>) => {
  const values = useForm({
    defaultValues,
    mode,
  });
  return values;
};
