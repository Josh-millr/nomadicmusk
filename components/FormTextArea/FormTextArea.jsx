import { TextArea } from "../index";

export const FormTextArea = ({
  id,
  placeholder,
  required,
  getValue,
  setValue,
  label,
}) => {
  return (
    <div className="grid grow grid-cols-1 grid-rows-1 gap-y-2">
      <label
        htmlFor={id}
        className="block whitespace-nowrap text-sm font-medium"
      >
        {label}
      </label>
      <TextArea
        id={id}
        value={setValue}
        placeholder={placeholder}
        required={required}
        getValue={getValue}
      />
    </div>
  );
};
