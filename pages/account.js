import { ContentStore, Avatar, Button, BiAddToQueue } from "../components/index";

export default function Account() {
  return (
    <div className="mx-auto grid w-full grid-cols-1 grid-rows-1 gap-y-[40px] gap-x-5 px-[24px] py-[24px] md:fixed md:h-[100vh] md:grid-cols-2 md:overflow-hidden">
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
      <ContentStore />
    </div>
  );
}
