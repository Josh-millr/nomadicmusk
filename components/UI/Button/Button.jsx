const Default = ({ label }) => (
  <button
    type="button"
    className="w-full sm:w-auto rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {label}
  </button>
);
const Alternative = ({ label }) => (
  <button
    type="button"
    className="w-full sm:w-auto rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
  >
    {label}
  </button>
);
const Dark = ({ label }) => (
  <button
    type="button"
    className="w-full sm:w-auto rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
  >
    {label}
  </button>
);
const Light = ({ label }) => (
  <button
    type="button"
    className="w-full sm:w-auto rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
  >
    {label}
  </button>
);
const Success = ({ label }) => (
  <button
    type="button"
    className="w-full sm:w-auto rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
  >
    {label}
  </button>
);
const Danger = ({ label }) => (
  <button
    type="button"
    className="w-full sm:w-auto rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
  >
    {label}
  </button>
);
const Warning = ({ label }) => (
  <button
    type="button"
    className="w-full sm:w-auto rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
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