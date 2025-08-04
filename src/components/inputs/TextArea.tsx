import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { useFormContext } from "react-hook-form";
import { InputHTMLAttributes } from "react";

type Props<T> = {
  name: keyof T;
  placeholder: string;
} & InputHTMLAttributes<HTMLTextAreaElement>;

export default function TextAreaField<T>({
  name,
  placeholder,
  className,
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
            <Textarea
              className={cn("w-full md:w-md", className)}
              placeholder={placeholder}
              {...field}
              {...rest}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
