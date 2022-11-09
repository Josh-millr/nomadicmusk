import Image from "next/image";

export const Avatar = ({ src }) => {
  return (
    <div className="relative h-[80px] w-[80px] rounded-full bg-gray-200">
      <Image
        src={src}
        layout="fill"
        className="rounded-full"
        alt="image of man smiling"
      />
    </div>
  );
};
