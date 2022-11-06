import { TextInput } from "../index";

export const FormInput = ({ type, placeholder, required, getValue, label }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-y-[0px] grow">
      <label
        htmlFor={type}
        className="mb-2 block text-sm font-medium text-white dark:text-gray-300 whitespace-nowrap"
      >
        {label}
      </label>
      <TextInput
        type={type}
        placeholder={placeholder}
        required={required}
        getValue={(value) => getValue(value)}
      />
    </div>
  );
};
