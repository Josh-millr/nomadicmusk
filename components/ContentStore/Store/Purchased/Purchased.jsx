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
        thumbnail,
        fileQuantity,
        maxMembers,
        availableMembers,
        duration,
        fileType,
        author,
        rating,
        price,
      },
      index
    ) => (
      <PurchaseItem
        thumbnail={thumbnail}
        author={author}
        maxMembers={maxMembers}
        availableMembers={availableMembers}
        key={index}
        title={title}
        description={description}
        uploaded={uploadDate}
        duration={duration}
        fileQty={fileQuantity}
        fileType={fileType}
        rating={rating}
        price={price}
      />
    )
  );
};
