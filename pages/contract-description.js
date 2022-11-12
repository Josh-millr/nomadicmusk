import {
  BiTransferAlt,
  BiDollarCircle,
  BiShareAlt,
  BiTrash,
} from "../components/index";

const ContractActionButton = ({ label, icon: Icon }) => {
  return (
    <button className="grid h-fit w-fit grid-cols-1 grid-rows-1 place-content-center gap-y-2 rounded-lg border border-gray-200 bg-gray-100 p-6 text-gray-800 sm:p-4">
      <div className="h-fit w-fit place-content-center rounded-full border border-gray-400 px-4 py-2">
        <Icon size={20} />
      </div>
      <p className="text-xs">{label}</p>
    </button>
  );
};

const ContractDescription = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20">
      {/* Contract Actions */}
      <div className="grid-row-1 grid grid-cols-1 gap-y-6 py-10">
        <h1 className="text-2xl font-bold">Contract Action</h1>
        <div className="flex h-fit w-fit flex-wrap place-content-center gap-6 rounded-3xl border border-gray-300 p-6">
          {/* Transfer */}
          <ContractActionButton label="Transfer" icon={BiTransferAlt} />
          {/* Share */}
          <ContractActionButton label="Share" icon={BiShareAlt} />
          {/* Resell */}
          <ContractActionButton label="Resell" icon={BiDollarCircle} />
          {/* Destroy */}
          <ContractActionButton label="Destroy" icon={BiTrash} />
        </div>
      </div>

      {/* Contract Current Info */}
      <div className="items-center gap-x-2 border-b border-zinc-200 lg:flex lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-4  gap-y-2 border-b border-zinc-200 py-4 lg:border-none ">
          {/* Creators Name */}
          <div className="flex items-center gap-x-2">
            <p className="my-auto text-xs font-bold">Creator:</p>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700">
              <p className="whitespace-nowrap text-xs font-bold">
                Samuel Mike Jr.
              </p>
            </div>
          </div>
          {/* Creation Date */}
          <div className="flex items-center gap-x-2">
            <p className="my-auto text-xs font-bold">Creation Date:</p>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700">
              <p className="whitespace-nowrap text-xs font-bold">
                Aug 6th, 2022
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          {/* Sharing */}
          <div className="flex gap-x-2">
            <p className="my-auto whitespace-nowrap text-xs font-bold">
              Sharing:
            </p>
            <div className="flex h-fit w-fit justify-items-center gap-x-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700">
              <p className="whitespace-nowrap text-xs font-bold">
                3 Participants
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractDescription;
