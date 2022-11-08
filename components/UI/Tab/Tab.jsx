export const Tab = ({ navItems, mountStore, activeSection }) => (
  <ul className="-mb-px flex flex-wrap place-content-evenly content-evenly justify-evenly text-center text-xs text-gray-500">
    {navItems.map(({ icon, label }, index) => (
      <li key={index} onClick={() => mountStore(label)}>
        <a
          href="#"
          className={`${
            activeSection === label &&
            "pointer-events-none border-b-2 border-blue-700 text-blue-700"
          } group inline-flex gap-x-2 rounded-t-lg border-b-2 border-transparent p-4 font-bold hover:border-blue-700 hover:text-gray-700`}
        >
          {icon}
          {label}
        </a>
      </li>
    ))}
  </ul>
);
