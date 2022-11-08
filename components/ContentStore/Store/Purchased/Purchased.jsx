import { PurchaseItem } from "./PurchaseItem/PurchaseItem";
import data from "../../../../libs/contentPreview.js";

export const Purchased = () => {
  const uploadedPreviewItems = [...data];

  return uploadedPreviewItems.map(
    (
      {
        title,
        description,
        uploadDate,
        fileQuantity,
        maxMembers,
        availableMembers,
        duration,
        fileType,
        quantityPurchased,
        quantityLeft,
      },
      index
    ) => (
      <PurchaseItem
        // thumbnail={""}
        quantityPurchased={quantityPurchased}
        quantityLeft={quantityLeft}
        maxMembers={maxMembers}
        availableMembers={availableMembers}
        key={index}
        title={title}
        description={description}
        uploaded={uploadDate}
        duration={duration}
        fileQty={fileQuantity}
        fileType={fileType}
      />
    )
  );
};
