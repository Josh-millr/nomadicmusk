import { SellingItem } from "./SellingItem/SellingItem";
import data from "../../../../libs/contentPreview.js";

export const Selling = () => {
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
        quantityPurchased,
        quantityLeft,
        rating,
        price,
      },
      index
    ) => (
      <SellingItem
        thumbnail={thumbnail}
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
        rating={rating}
        price={price}
      />
    )
  );
};
