import { UploadedItem } from "./UploadedItem/UploadedItem";
import data from "../../../../libs/contentPreview.js";

export const Uploaded = () => {
  const uploadedPreviewItems = [...data];

  return uploadedPreviewItems.map(
    (
      { title, description, uploadDate, fileQuantity, duration, fileType },
      index
    ) => (
      <UploadedItem
        // thumbnail={""}
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
