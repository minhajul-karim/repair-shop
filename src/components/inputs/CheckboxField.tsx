import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";

type Props<T> = {
  name: keyof T & string;
  label: string;
  checked: boolean | undefined;
};

export default function CheckBoxField<T>({ name, label, checked }: Props<T>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="flex gap-x-2">
              <Label htmlFor={name}>{label}</Label>
              <Checkbox
                {...field}
                id={name}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
