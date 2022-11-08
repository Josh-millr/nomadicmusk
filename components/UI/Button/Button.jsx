const Default = ({ label, type }) => {
  const style = {
    general: "w-full rounded-lg px-5 py-2.5 text-sm  font-medium sm:w-auto",
    primary:
      "bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ",
    secondary:
      "border-blue-700 border-2 text-blue-700 hover:bg-white focus:outline-none focus:ring-4 focus:text-white dark:border-blue-600 dark:hover:bg-white dark:focus:bg-blue-800 ",
  };
  return (
    <button
      type="submit"
      className={`${style.general} ${type === "primary" && style.primary} ${
        type === "secondary" && style.secondary
      }`}
    >
      {label}
    </button>
  );
};
const Alternative = ({ label }) => (
  <button
    type="submit"
    className="w-full rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
  >
    {label}
  </button>
);
const Dark = ({ label }) => (
  <button
    type="submit"
    className="w-full rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:w-auto"
  >
    {label}
  </button>
);
const Light = ({ label }) => (
  <button
    type="submit"
    className="w-full rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:w-auto"
  >
    {label}
  </button>
);
const Success = ({ label }) => (
  <button
    type="submit"
    className="w-full rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 sm:w-auto"
  >
    {label}
  </button>
);
const Danger = ({ label }) => (
  <button
    type="submit"
    className="w-full rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:w-auto"
  >
    {label}
  </button>
);
const Warning = ({ label }) => (
  <button
    type="submit"
    className="w-full rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900 sm:w-auto"
  >
    {label}
  </button>
);

export const Button = {
  Dark: Dark,
  Light: Light,
  Danger: Danger,
  Warning: Warning,
  Success: Success,
  Default: Default,
  Alternative: Alternative,
};
