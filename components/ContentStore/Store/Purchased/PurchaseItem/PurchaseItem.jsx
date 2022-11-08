import React from "react";
import { RiStarFill } from "../../../../index.js";
export const PurchaseItem = ({
  title,
  description,
  maxMembers,
  availableMembers,
  quantityPurchased,
  quantityLeft,
  price,
  rating,
  thumbnail,
  uploaded,
  duration,
  fileQty,
  fileType,
}) => {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-4">
<div className="">
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
</div>

      {/* Content filetype &  */}
      <div className="flex w-full gap-x-4 text-xs">
        <div className="">
          <p className="font-bold text-slate-400">
            Members:{" "}
            <span className="text-slate-900">
              {availableMembers + "/" + maxMembers}
            </span>
          </p>
          {/* Divider */}
          <div className="my-[4px] h-[1px] w-full bg-gray-300" />

          {/* Purchase Quantity progress bar */}
          <div className="">
            <label
              className="mb-1 text-xs font-bold"
              for="file"
            >{`${quantityPurchased}/${quantityLeft}`}</label>
            <div className="z-30 h-2 w-[100px] rounded-full bg-gray-200">
              <div
                className={`h-full rounded-full bg-blue-600`}
                style={{ width: (quantityPurchased / quantityLeft) * 100 }}
              />
            </div>
            {/* For Accessibility Purpose Only */}
            <progress
              className="invisible relative top-[-8px] z-10 hidden h-fit w-fit"
              id="file"
              value={quantityPurchased}
              max={quantityLeft}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-full w-[1px] bg-gray-300" />

        <div className="grid w-fit grid-cols-1 grid-rows-1 gap-y-2">
          <p className="font-bold ">
            File Type:{" "}
            <span className="pl-[4px] text-blue-500 underline">{fileType}</span>
          </p>
          <div className="h-fit w-fit rounded-full border border-gray-300 bg-gray-100 py-1 px-3">
            {/* wallet address */}
            <p className="text-xs font-bold">x023SJD72I...</p>
          </div>
        </div>

        <div className="w-fill grid grid-cols-1 grid-rows-1 gap-y-2">
          <div className="flex">
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
          </div>
          <div className="h-fit w-fit rounded-full border border-gray-300 bg-gray-100 py-2 px-3">
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

{
  /* <div className="flex gap-x-[16px] text-xs text-slate-400">

<span className="h-full w-[1px] border-l border-gray-400" />
<p className="font-bold">
  File Qty: <span className="text-slate-900">{fileQty}</span>
</p>
</div> */
}
