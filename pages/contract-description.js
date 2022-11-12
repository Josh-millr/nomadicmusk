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

const ContractItem = ({ prop, value }) => {
  return (
    <div className="flex w-full items-center justify-between border-b border-gray-300 pb-2">
      <p className="font-bold">{prop}</p>
      <div className="h-fit w-fit rounded-full border bg-gray-300 px-4 py-2 text-gray-700">
        <p className="whitespace-nowrap text-xs font-bold">{value}</p>
      </div>
    </div>
  );
};
const ContractDescItem = ({ title, desc, icon: Icon, value }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-y-2 py-4">
      <div className="flex items-center gap-x-4">
        <div className="flex gap-x-2">
          <Icon size={20} />
          <p className="font-bold">{title}</p>
        </div>
        <div className="flex h-fit w-fit justify-items-center rounded-full bg-gray-300 px-4 py-2 text-gray-900">
          <p className="whitespace-nowrap text-xs font-bold">{value}</p>
        </div>
      </div>
      <p className="">{desc}</p>
    </div>
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

      {/* Contract Creation Info */}
      <div className="my-6 flex h-fit flex-col gap-x-6 gap-y-2 rounded-3xl bg-gray-200 p-6 py-10 text-xs text-gray-800 lg:flex-row lg:bg-transparent lg:py-0">
        <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-2 rounded-3xl lg:bg-gray-200 lg:p-6">
          {/* Contract Item */}
          <ContractItem prop="Contract Address" value=" 0x47378....67dfc" />
          <ContractItem prop="Blockchain" value="Ethereum" />
          <ContractItem prop="Block Number:" value="2342355" />
        </div>
        {/* ................................... */}
        <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-2 rounded-3xl lg:bg-gray-200 lg:p-6">
          {/* Contract Item */}
          <ContractItem prop="Token Standard" value="ERC-721" />
          <ContractItem prop="Blockchain" value="Ethereum" />
          <ContractItem prop="Block Number:" value="2342355" />
        </div>
      </div>

      {/* Contract Details */}
      <div className="py-10">
        <h1 className="m4-2 text-2xl font-bold">Contract Action</h1>
        {/* ............................... */}
        <div className="grid-row-1 grid grid-cols-1 gap-y-6 text-xs text-gray-800 md:gap-y-10 lg:gap-y-20">
          <div className="grid grid-cols-1 grid-rows-1 gap-y-6">
            <h3 className="border-b border-gray-300 py-4 font-bold ">
              Transfer
            </h3>
            {/* Contract Table */}
            <div className="grid w-full grid-cols-1 grid-rows-1 gap-x-4 text-xs text-gray-800 sm:grid-cols-2 lg:grid-cols-3">
              <ContractDescItem
                title="Transferable"
                desc="Ability to transfer the ownership of the content plus its
                  contract to another user."
                icon={BiTransferAlt}
                value="True"
              />
              {/* Item 2 */}
              <ContractDescItem
                title="Max Transferable:"
                desc="The maximum amout of times the content plus its contract can we transfered to a new owner/user."
                icon={BiTransferAlt}
                value="True"
              />
              {/* Item 3 */}
              <ContractDescItem
                title="Resellable:"
                desc="The ability to resell the content plus its contract to another user."
                icon={BiTransferAlt}
                value="True"
              />
              {/* Item 4 */}
              <ContractDescItem
                title="Max Resell:"
                desc="Ability to extend the contract on reselling."
                icon={BiTransferAlt}
                value="True"
              />
              {/* Item 5 */}
              <ContractDescItem
                title="Extend contract on Transfer:"
                desc="The ability to extend the contract while transfering to a new user."
                icon={BiTransferAlt}
                value="True"
              />
              {/* Item 6 */}
              <ContractDescItem
                title="Extend contract on Resell:"
                desc="The ability to extend the contract while Reselling to a new user."
                icon={BiTransferAlt}
                value="True"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractDescription;
