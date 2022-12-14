export const Badge = ({}) => {
  return (
    <button
      type="button"
      class="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300 dark:hover:text-pink-900"
      data-dismiss-target="#badge-dismiss-pink"
      aria-label="Remove"
    >
      <svg
        aria-hidden="true"
        class="h-3.5 w-3.5"
        ariaHidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Remove badge</span>
    </button>
  );
};
