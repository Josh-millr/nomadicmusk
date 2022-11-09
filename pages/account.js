import { ContentStore, Avatar, Button, BiAddToQueue } from "../components/index";

export default function Account() {
  return (
    <div className="text-gray-900 xl:w-[1280px] mx-auto grid grid-cols-1 grid-rows-1 gap-y-10 gap-x-5 px-6 py-[24px] md:fixed md:h-[100vh] md:grid-cols-2 md:overflow-hidden">
      <div className="grid grid-cols-1 grid-rows-1 gap-y-4 pt-[32px] md:h-fit">
        <div className="grid grid-cols-1 grid-rows-1 justify-items-center gap-y-4">
          <Avatar src="/profile.jpg"/>
          <p className="text-sm">@joshmillr</p>
        </div>

        <div className="grid grid-cols-1 grid-rows-1 justify-items-center">
          <div className="flex w-fit gap-x-2 rounded-full bg-gray-100 p-4 border border-gray-300">
            {/* wallet address */}
            <p className="text-sm font-bold">x023SJD72I...</p>
            <BiAddToQueue size={20} />
          </div>
        </div>

        <div className="mx-auto flex justify-center">
          <Button.Default type="primary" label="Upload content" />
        </div>
      </div>
      <ContentStore />
    </div>
  );
}
