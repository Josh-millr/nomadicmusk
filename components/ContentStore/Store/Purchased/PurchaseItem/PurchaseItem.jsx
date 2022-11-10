import React from "react";
import Image from "next/image";
import { RiStarFill } from "../../../../index.js";

export const PurchaseItem = ({
  title,
  description,
  maxMembers,
  availableMembers,
  author,
  price,
  rating,
  thumbnail,
  uploaded,
  duration,
  fileQty,
  fileType,
}) => {
  const addRating = (rateNum) => {
    const rateStars = [];
    const starComponent = <RiStarFill size={16} color="orange" />;
    for (var i = 0; i < rateNum; i++) rateStars.push(starComponent);
    return rateStars;
  };

  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-4">
      {/* Upload time & Duration */}
      <div className="flex justify-between text-xs">
        <p className="font-bold text-slate-400">
          Uploaded: <span className="text-slate-900">{uploaded}</span>
        </p>
        <p className="font-bold text-slate-400">
          Duration: <span className="text-slate-900">{`${duration}hr`}</span>
        </p>
      </div>
      {/* content thumbnail & Description */}
      <div className="flex gap-x-2">
        {/* Thumbnail */}
        <div className="relative h-20 basis-[100px] rounded-xl bg-gray-200">
          <Image
            src={thumbnail}
            layout="fill"
            className="rounded-xl"
            alt="image of man smiling"
          />
        </div>

        {/* Title & Description */}
        <div className="w-fit basis-[auto] ">
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="pb-1 text-xs font-medium text-slate-800 ">- {author}</p>
          <p className="text-xs text-slate-600">
            {description.length > 150
              ? description.substring(0, 150) + ". . ."
              : description}
          </p>
        </div>
      </div>
      @{/* Content filetype &  */}
      <div className="flex w-full justify-between text-xs">
        <div className="flex gap-x-4 ">
          <div className="">
            {/* File Quantity */}
            <p className="font-bold text-slate-400">
              File Qty: <span className="text-slate-900">{fileQty}</span>
            </p>
            {/* Divider */}
            <div className="my-[4px] h-[1px] w-full bg-gray-300" />
            <p className="font-bold text-slate-400">
              File Type:{" "}
              <span className="pl-[4px] text-blue-500 underline">
                {fileType}
              </span>
            </p>
          </div>

          {/* Divider */}
          <div className="h-full w-[1px] bg-gray-300" />

          <div className="grid w-fit grid-cols-1 grid-rows-1 gap-y-2">
            {/* members */}
            <p className="font-bold text-slate-400">
              Member:{" "}
              <span className="text-slate-900">
                {`${availableMembers}/${maxMembers}`}
              </span>
            </p>

            <div className="h-fit w-fit rounded-full border border-gray-300 bg-gray-100 py-1 px-3">
              {/* wallet address */}
              <p className="text-xs font-bold">x023SJD72I...</p>
            </div>
          </div>
        </div>
        <div className="w-fill grid grid-cols-1 grid-rows-1 justify-items-end gap-y-2">
          <div className="flex">{addRating(rating)}</div>
          <div className="h-fit w-fit rounded-full border border-[#56AAE7] bg-[#56AAE729] py-2 px-3">
            {/* Price Tag*/}
            <p className="text-xs font-bold">{`$${price}`}</p>
          </div>
        </div>
      </div>
      {/* view content button*/}
      <button className="border-y border-gray-300 py-2 text-xs font-bold text-blue-500">
        View Content
      </button>
    </div>
  );
};
