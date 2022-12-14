import { TextInput } from "../index";

export const FormInput = ({
  type,
  placeholder,
  required,
  getValue,
  setValue,
  label,
}) => {
  return (
    <div className="grid grow grid-cols-1 grid-rows-1">
      <label
        htmlFor={type}
        className="mb-2 block whitespace-nowrap text-sm font-medium"
      >
        {label}
      </label>
      <TextInput
        value={setValue}
        type={type}
        placeholder={placeholder}
        required={required}
        getValue={getValue}
      />
    </div>
  );
};
