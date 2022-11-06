import {
  Avatar,
  Button,
  BiAddToQueue,
  BiWallet,
  BiCloudUpload,
} from "../components/index";

export default function Account() {
  return (
    <div className="mx-auto grid w-full grid-cols-1 grid-rows-1 gap-y-[40px] gap-x-5 px-[24px] py-[24px] md:grid-cols-2">
      <div className="grid grid-cols-1 grid-rows-1 gap-y-[16px] pt-[32px] md:h-fit">
        <div className="grid grid-cols-1 grid-rows-1 justify-items-center gap-y-[16px]">
          <Avatar />
          <p className="text-sm text-white">joshmillr</p>
        </div>

        <div className="grid grid-cols-1 grid-rows-1 justify-items-center">
          <div className="flex w-fit gap-x-[8px] rounded-full bg-white p-[16px]">
            {/* wallet address */}
            <p className="text-sm font-bold">x023SJD72I...</p>
            <BiAddToQueue size={20} />
          </div>
        </div>

        <div className="mx-auto flex justify-center">
          {/* Upload content button */}
          <Button.Default type="primary" label="Upload content" />
        </div>
      </div>

      {/* Content store */}
      <div className="md:h-[100vh] md:border-l-[1px] md:border-[#2f3238]">
        <div className="border-b-[2px] border-[#151424] dark:border-gray-700 md:ml-[32px]">
          <ul className="-mb-px flex flex-wrap place-content-evenly content-evenly justify-evenly  text-center text-sm font-medium text-gray-500 dark:text-gray-400">
            <li className="">
              <a
                href="#"
                className="active group inline-flex gap-x-[8px] rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <BiCloudUpload size={20} />
                Uploaded
              </a>
            </li>

            <li className="">
              <a
                href="#"
                className=" group inline-flex gap-x-[8px] rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                aria-current="page"
              >
                <BiWallet size={20} />
                Purchased
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
