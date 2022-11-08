import React from "react";

export const UploadedItem = ({
  title,
  description,
  thumbnail,
  uploaded,
  duration,
  fileQty,
  fileType,
}) => {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-4">
      {/* Upload time & Duration */}
      <div className="flex justify-between text-xs">
        <p className="font-bold text-slate-400">
          Uploaded: <span className="text-slate-900">{uploaded}</span>
        </p>
        <p className="font-bold text-slate-400">
          Duration: <span className="text-slate-900">{duration}</span>
        </p>
      </div>

      {/* content thumbnail & Description */}
      <div className="flex gap-x-2">
        {/* Thumbnail */}
        <div className="h-20 basis-[100px] rounded-xl bg-gray-200"></div>

        {/* Title & Description */}
        <div className="w-fit basis-[auto] ">
          <h3 className="pb-1 text-sm font-bold">{title}</h3>
          <p className="text-xs text-slate-600">
            {description.length > 150
              ? description.substring(0, 150) + ". . ."
              : description}
          </p>
        </div>
      </div>

      {/* Content filetype &  */}
      <div className="flex gap-x-[16px] text-xs text-slate-400">
        <p className="font-bold ">
          File Type:{" "}
          <span className="pl-[4px] text-blue-500 underline">{fileType}</span>
        </p>
        <span className="h-full w-[1px] border-l border-gray-400" />
        <p className="font-bold">
          File Qty: <span className="text-slate-900">{fileQty}</span>
        </p>
      </div>

      {/* view content button*/}
      <button className="border-y border-gray-300 py-2 text-xs font-bold text-blue-500">
        View Content
      </button>
    </div>
  );
};
