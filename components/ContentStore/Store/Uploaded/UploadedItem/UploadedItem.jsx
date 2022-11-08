import React from "react";

export const UploadedItem = ({}) => {
  const description =
    "Next.js is an open-source React framework that makes it easier to build production ready react applications by providing multiple features like server side rendering and static site generation  which renders the application on the server";

  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-[16px]">
      {/* Upload time & Duration */}
      <div className="flex justify-between text-xs">
        <p className="font-bold text-[#9da4af]">
          Uploaded: <span className="text-white">1st - 11 - 2022</span>
        </p>
        <p className="font-bold text-[#9da4af]">
          Duration: <span className="text-white">20 Hrs</span>
        </p>
      </div>

      {/* content thumbnail & Description */}
      <div className="flex gap-x-[8px]">
        {/* Image - w-[80px] */}
        <div className="h-[80px] basis-[100px]  rounded-xl bg-white"></div>

        {/* Title & Description */}
        <div className="w-fit basis-[auto] text-white">
          <h3 className="pb-[4px] text-sm font-bold">
            Computational thinking for problem solving
          </h3>
          <p className="text-xs text-[#9da4af]">
            {description.length > 150
              ? description.substring(0, 150) + ". . ."
              : description}
          </p>
        </div>
      </div>

      {/* Content filetype &  */}
      <div className="flex gap-x-[16px] text-xs text-[#9da4af]">
        <p className="font-bold ">
          File Type:{" "}
          <span className="pl-[4px] text-blue-500 underline">Video</span>
        </p>
        <span className="h-full w-[1px] bg-[#2d3238]" />
        <p className="font-bold">
          File Qty: <span className="text-[#FFFFFF]">20Hrs</span>
        </p>
      </div>

      {/* view content button*/}
      <button className="border-y-[1px] border-[#2d3238] py-[8px] text-xs font-bold text-blue-500">
        View Content
      </button>
    </div>
  );
};
