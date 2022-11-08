import React, { useState } from "react";
import {
  BiWallet,
  BiCloudUpload,
  Tab,
  Purchased,
  Uploaded,
  Selling,
  Sold,
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
      icon: <BiWallet size={20} />,
      section: <Purchased />,
    },
    {
      label: "Selling",
      icon: <BiWallet size={20} />,
      section: <Selling />,
    },
    {
      label: "Sold",
      icon: <BiWallet size={20} />,
      section: <Sold />,
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:overflow-y-scroll md:border-l-[1px] md:border-[#2f3238]">
      <div className="h-fit border-b-[2px] border-[#151424] dark:border-gray-700 md:ml-[32px]">
        <Tab
          navItems={navItem}
          mountStore={setCurrentSection}
          activeSection={currentSection}
        />
      </div>
      <div className="text-white">
        {navItem.map(
          ({ label, section }) => currentSection === label && section
        )}
      </div>
    </div>
  );
};
