import React, { useState } from "react";
import axios from "axios";
import { FormInput, Checkbox, Button } from "../components/index";

export default function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [presistSignin, setPresistSignin] = useState(null);

  // const validateEmail = (email) => {
  // TODO: Use regular expression to test if the email is in it's correct format
  // };

  const submitSigninForm = async (e) => {
    e.preventDefault();
    // Send the email credentials to the server for login authentication
  };

  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 justify-items-center gap-y-[40px] py-[16vh] px-[24px] sm:grid sm:justify-center">
      <div className="grid grid-cols-1 grid-rows-1 justify-items-center  gap-y-[8px]">
        <h1 className="text-3xl font-bold text-[#ffffff]">Sign In</h1>
        <p className="text-xs text-[#95959f] sm:text-xs">
          Sign in to the platform to get started
        </p>
      </div>
      <form
        onSubmit={submitSigninForm}
        className="grid-row-1 grid w-full grid-cols-1 justify-items-center sm:w-[420px]"
      >
        <div className="mb-[16px] w-full">
          <FormInput
            label="Your Email"
            type="email"
            placeholder="email@gmail.com"
            getValue={(value) => setEmail(value)}
          />
        </div>
        <div className="mb-[16px] w-full">
          <FormInput
            label="Your Password"
            type="password"
            placeholder="Your password"
            getValue={(value) => setPassword(value)}
          />
        </div>
        <div className="mb-[16px] w-full">
          <Checkbox label="Remember me" />
        </div>
        <Button.Default type="primary" label="Submit" />
      </form>
    </div>
  );
}
