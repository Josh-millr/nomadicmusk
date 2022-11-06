export const Checkbox = ({ label, getValue }) => {
  return (
    <div className="flex gap-x-[4px]">
      <div className="flex h-5 items-center">
        <input
          id="remember"
          type="checkbox"
          value=""
          className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          required=""
        />
      </div>
      <label
        for="remember"
        className="ml-2 text-sm font-medium text-white dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};
