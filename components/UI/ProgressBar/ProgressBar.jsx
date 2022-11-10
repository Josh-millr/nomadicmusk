export const Progresbar = ({ quantityPurchased, quantityLeft }) => {
  return (
    <div className="">
      {/* Purchase Quantity progress bar */}
      <label
        className="mb-1 text-xs font-bold"
        for="file"
      >{`${quantityPurchased}/${quantityLeft} Qty Left`}</label>
      <div className="z-30 h-2 w-[100px] rounded-full bg-gray-200">
        <div
          className={`mt-[6px] h-full rounded-full bg-blue-600`}
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
  );
};
