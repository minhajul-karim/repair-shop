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
import states from "@/constants/states";

type Props<T> = {
  name: keyof T;
  placeholder: string;
} & InputHTMLAttributes<HTMLSelectElement>;

export default function SelectField<T>({
  name,
  placeholder,
  disabled,
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
                {states.map((state) => (
                  <SelectItem key={state.id} value={state.value}>
                    {state.label}
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
