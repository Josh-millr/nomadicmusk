import Link from "next/link";
import { Button } from "../components/index";

export default function Home() {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 justify-items-center gap-y-[40px] py-[24vh] px-[24px] sm:grid sm:justify-center">
      <div className="grid grid-cols-1 grid-rows-1 justify-items-center  gap-y-[8px]">
        <h1 className="max-w-[480px] text-center text-4xl font-bold text-[#ffffff]">
          Nomadicmusk content sharing platform
        </h1>
        <p className="sm:text-md text-center text-sm text-[#95959f]">
          Click here to get started
        </p>
      </div>
      <Link href="/signin">
        <Button.Default type="primary" label="Get Started" />
      </Link>
    </div>
  );
}
