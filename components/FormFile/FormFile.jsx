import { FileInput } from "../index";

export const FormFile = ({type, label}) => {
  return (
    <div className="grid grow grid-cols-1 grid-rows-1">
      <label
        htmlFor={type}
        className="mb-2 block whitespace-nowrap text-sm font-medium"
      >
        {label}
      </label>
      <FileInput />
    </div>
  );
};
