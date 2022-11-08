import React, { useState } from "react";
import {
  BiCloudUpload,
  Tab,
  BiCart,
  Purchased,
  Uploaded,
  Selling,
  Sold,
  BiDollarCircle,
  BiDonateHeart,
} from "../index";

export const ContentStore = () => {
  const [currentSection, setCurrentSection] = useState("Uploaded");

  const navItem = [
    {
      label: "Uploaded",
      icon: <BiCloudUpload size={20} />,
      section: <Uploaded />,
    },
    {
      label: "Purchased",
      icon: <BiCart size={20} />,
      section: <Purchased />,
    },
    {
      label: "Selling",
      icon: <BiDollarCircle size={20} />,
      section: <Selling />,
    },
    {
      label: "Sold",
      icon: <BiDonateHeart size={20} />,
      section: <Sold />,
    },
  ];

  return (
    <div className="text-gray-900 md:overflow-y-scroll md:border-l md:border-slate-200">
      <div className="h-fit border-b border-slate-300 dark:border-gray-700 md:mx-6">
        <Tab
          navItems={navItem}
          mountStore={setCurrentSection}
          activeSection={currentSection}
        />
      </div>
      <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-4 py-6 md:px-6">
        {navItem.map(
          ({ label, section }) => currentSection === label && section
        )}
      </div>
    </div>
  );
};
