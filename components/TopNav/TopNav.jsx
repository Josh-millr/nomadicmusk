import React, { useContext } from "react";
import Link from "next/link";
import { RouteInfo } from "../../context/RouteContext";
import { Button, Logo } from "../index";

export const TopNav = () => {
  let { currRoute, setCurrRoute } = useContext(RouteInfo);

  const pageRoute =
    currRoute === "/" || currRoute === "/signup" ? "/signin" : "/signup";
  const buttonRoute =
    currRoute === "/" || currRoute === "/signup" ? "sign in" : "sign up";

  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b-[2px] border-gray-900 bg-[#02010f] px-6 py-2.5 dark:border-gray-600 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
          <Logo width="24" height="24" color="white" />
        </Link>
        <div className="flex items-center gap-x-[16px] md:order-2">
          <p className="hidden text-[12px] text-white sm:block">
            {currRoute === "/" || currRoute === "/signup"
              ? "Already have an account?"
              : "Dont have an account?"}
          </p>
          <span onClick={() => setCurrRoute(pageRoute)}>
            <Link href={pageRoute}>
              <Button.Default type="secondary" label={buttonRoute} />
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
