import { Button, Logo } from "../index";

export const TopNav = () => {
  return (
    <nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-900 px-2 py-2.5 dark:border-gray-600 dark:bg-gray-900 sm:px-4">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="https://unknown.com/" class="flex items-center">
          <Logo width="24" height="24" color="white"/>
        </a>
        <div class="flex items-center gap-x-[16px] md:order-2">
          <p className="hidden text-[12px] text-white sm:block">
            Dont have an account?
          </p>
          <Button.Default label="Sign up" />
        </div>
      </div>
    </nav>
  );
};
