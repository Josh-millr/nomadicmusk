export const Checkbox = ({ label, getValue }) => {
  return (
    <div className="flex gap-x-[4px]">
      <div className="flex h-5 items-center">
        <input
          id="remember"
          type="checkbox"
          value=""
          className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
          required=""
        />
      </div>
      <label htmlFor="remember" className="ml-2 text-sm font-medium">
        {label}
      </label>
    </div>
  );
};
