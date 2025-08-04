import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { InputHTMLAttributes } from "react";

type Option = {
    id: number;
    label: string;
    value: string;
}

type Props<T> = {
  name: keyof T;
  placeholder: string;
  options: Option[];
} & InputHTMLAttributes<HTMLSelectElement>;

export default function SelectField<T>({
  name,
  placeholder,
  disabled,
  options,
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
          <Select {...field} disabled={disabled} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="w-full md:w-md">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option.id} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
