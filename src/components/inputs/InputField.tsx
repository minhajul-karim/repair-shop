import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import { InputHTMLAttributes } from "react";

type Props<T> = {
  name: keyof T;
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputField<T>({
  name,
  placeholder,
  ...rest
}: Props<T>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{placeholder}</FormLabel>
          <FormControl>
            <Input className="w-full md:w-md" placeholder={placeholder} {...field} {...rest} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
