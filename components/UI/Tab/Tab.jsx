export const Tab = ({ navItems, mountStore, activeSection }) => (
  <ul className="-mb-px flex flex-wrap place-content-evenly content-evenly justify-evenly  text-center text-sm font-medium text-gray-500 dark:text-gray-400">
    {navItems.map(({ icon, label }, index) => (
      <li key={index} onClick={() => mountStore(label)}>
        <a
          href="#"
          className={`${
            activeSection === label &&
            "pointer-events-none border-b-2 border-blue-700 text-blue-700"
          } group inline-flex gap-x-[8px] rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300`}
        >
          {icon}
          {label}
        </a>
      </li>
    ))}
  </ul>
);
