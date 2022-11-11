import {
  RiStarFill,
  Progressbar,
  BiCopyAlt,
  BiCubeAlt,
  BiCaretRightCircle,
} from "../components/index";

function ContentDescription() {
  return (
    <div className="px-6 sm:px-10 lg:px-20">
      {/* Hero */}
      <div className="gap-y-4 gap-x-6 border-b border-zinc-200 py-8 sm:flex">
        <div className="pb-6 sm:p-0">
          <div className="lg:[256px] h-[208px] w-[208px] rounded-3xl bg-gray-400 lg:h-[256px]">
            {/* Thumbnail */}
          </div>
        </div>
        <div className="my-auto grid grid-cols-1 grid-rows-1 gap-y-6">
          <div className="flex gap-x-4">
            {/* Category */}
            <div className="h-fit w-fit rounded-full bg-[#0077cc21] px-4 py-2">
              <p className="text-xs font-bold text-blue-600">Courses</p>
            </div>
            {/* Update Alert */}
            <div className="flex h-fit w-fit place-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              <p className="text-xs font-bold text-gray-800">New Update</p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 gap-y-4">
            <h1 className="text-3xl font-bold md:text-4xl">
              Computational thinking for problem solving
            </h1>
            <p className="text-xs font-bold md:text-xs">- Samuel Jackson</p>
          </div>
          <div className="flex gap-x-4">
            <div className="flex h-fit w-fit place-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800">
              <p className="text-xs font-bold ">4.4</p>
              <RiStarFill size={16} />
            </div>
            {/* Divider */}
            <div className="h-full w-[1px] bg-gray-300" />
            <Progressbar quantityPurchased={450} quantityLeft={1000} />
          </div>
        </div>
      </div>
      {/* ...................................... */}
      <div className="border-b border-zinc-200 sm:flex sm:justify-between">
        <div className="flex gap-x-4 border-b border-zinc-200 py-4 sm:border-none">
          <button className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border bg-blue-600 px-4 py-2 text-white">
            <BiCaretRightCircle size={20} />
            <p className="text-xs font-bold ">Start Playing</p>
          </button>
          <button className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border-2 border-blue-600 px-4 py-2 text-blue-600">
            <BiCubeAlt size={20} />
            <p className="text-xs font-bold">View Contract</p>
          </button>
        </div>
        <div className="py-4">
          {/* Content Hash Address */}
          <div className="flex gap-x-2">
            <p className="my-auto text-xs font-bold">Address:</p>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full bg-[#e2e2e2] px-4 py-2 text-black">
              <BiCopyAlt size={20} color="black" />
              <p className="text-xs font-bold ">x023423..</p>
            </div>
          </div>
        </div>
      </div>
      {/* ...................................... */}
      <div className="items-center gap-x-2 border-b border-zinc-200 lg:flex lg:justify-between">
        <div className="flex items-center gap-x-4 border-b border-zinc-200 py-4 lg:border-none">
          {/* Price */}
          <div className="flex items-center gap-x-2">
            <p className="my-auto text-xs font-bold">Price:</p>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-blue-400 bg-sky-50 px-4 py-2 text-blue-700">
              <p className="text-xs font-bold ">$172</p>
            </div>
          </div>
          {/* Ownership number */}
          <div className="flex items-center gap-x-2">
            <p className="my-auto text-xs font-bold">Owner:</p>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-blue-400 bg-sky-50 px-4 py-2 text-blue-700">
              <p className="text-xs font-bold ">23/1000</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 py-4">
          {/* File Quantity */}
          <div className="flex gap-x-2">
            <p className="my-auto whitespace-nowrap text-xs font-bold">
              File Quantity:
            </p>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700">
              <p className="whitespace-nowrap text-xs font-bold">712</p>
            </div>
          </div>
          {/* Duration */}
          <div className="flex gap-x-2">
            <p className="my-auto whitespace-nowrap text-xs font-bold">
              Duration:
            </p>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700">
              <p className="whitespace-nowrap text-xs font-bold">19 hrs</p>
            </div>
          </div>
          {/* Category */}
          <div className="flex gap-x-2">
            <p className="my-auto whitespace-nowrap text-xs font-bold">
              Category:
            </p>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700">
              <p className="whitespace-nowrap text-xs font-bold">Educational</p>
            </div>
          </div>
          {/* Last Updated */}
          <div className="flex gap-x-2">
            <p className="my-auto whitespace-nowrap text-xs font-bold">
              Last Updated:
            </p>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700">
              <p className="whitespace-nowrap text-xs font-bold">Educational</p>
            </div>
          </div>
        </div>
      </div>
      {/* ...................................... */}
      <div className="flex w-full py-8 gap-y-8 flex-wrap">
        <div className="grid grid-cols-1 grid-rows-1 gap-y-4 md:basis-3/4">
          <div className="grid gap-y-2">
            <p className="text-xl font-bold">Content Description</p>
            <p className="text-sm">
              Of course, deeply understanding your users and their needs is the
              foundation of any good product. But that also means understanding
              all types of users and use cases, and familiarizing yourself with
              challenges and requirements that may not be top of mind. While a
              target persona or core use case may be your north star, Furquan
              Ahmad, Product Designer at Ford Motor Company, says that
              developing user empathy should extend beyond the “perfect use
              case.”
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-2">
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700">
              <p className="whitespace-nowrap text-xs font-bold">Javascript</p>
            </div>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700">
              <p className="whitespace-nowrap text-xs font-bold">Web</p>
            </div>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700">
              <p className="whitespace-nowrap text-xs font-bold">Frontend</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-4 md:basis-1/4">
          <div className="grid gap-y-2">
            <p className="text-xl font-bold">About</p>
            <p className="text-sm">
              Of course, deeply understanding your users and their needs is the
              foundation of any good product. But that also means understanding
              all types of users and use cases, and familiarizing yourself with
              challenges and requirements that may not be top of mind. While a
              target persona or core use case may be your north star, Furquan
              Ahmad, Product Designer at Ford Motor Company, says that
              developing user empathy should extend beyond the “perfect use
              case.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContentDescription;
