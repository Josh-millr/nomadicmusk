import Link from "next/link";
import { Button, Logo } from "../index";

export const TopNav = () => {
  // fixed
  return (
    <nav className="top-0 left-0 z-20 w-full border-b border-gray-900 px-6 py-2.5 dark:border-gray-600 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="https://unknown.com/" target="blank" className="flex items-center">
          <Logo width="24" height="24" color="white" />
        </a>
        <div className="flex items-center gap-x-[16px] md:order-2">
          <p className="hidden text-[12px] text-white sm:block">
            Dont have an account?
          </p>
          <Link href="/signup">
            <Button.Default label="Sign up" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
