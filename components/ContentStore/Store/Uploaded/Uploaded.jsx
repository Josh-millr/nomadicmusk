import { UploadedItem } from "./UploadedItem/UploadedItem";

export const Uploaded = () => {
  return (
    <div className="w-full grid grid-rows-1 grid-cols-1 gap-y-4">
      <UploadedItem />
      <UploadedItem />
      <UploadedItem />
    </div>
  );
};
