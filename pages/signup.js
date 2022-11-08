import React, { useState } from "react";
import { FormInput, Button } from "../components/index";

export default function SignUp() {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [firstname, setFirstname] = useState(null);

  const [passwordCopy1, setPasswordCopy1] = useState(null);
  const [passwordCopy2, setPasswordCopy2] = useState(null);

  const validatePassword = () => {};

  return (
    <div className="grid w-full text-gray-900 grid-cols-1 grid-rows-1 justify-items-center gap-y-10 py-[16vh] px-6 sm:grid sm:justify-center">
      <div className="grid grid-cols-1 grid-rows-1 justify-items-center gap-y-2">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-xs text-slate-500 sm:text-xs">
          Sign up to the platform to get started
        </p>
      </div>
      <form
        onSubmit={(e) => e.prevertDefault()}
        className="grid-row-1 grid w-full grid-cols-1 justify-items-center sm:w-[420px]"
      >
        <div className="mb-4 flex w-full gap-x-[8px]">
          <FormInput
            label="Firstname"
            type="text"
            placeholder="adamu"
            required={true}
            getValue={(value) => setFirstname(value)}
          />
          <FormInput
            label="Lastname"
            type="text"
            placeholder="musa"
            required={true}
            getValue={(value) => setLastname(value)}
          />
        </div>
        <div className="mb-4 w-full">
          <FormInput
            label="Username"
            type="text"
            placeholder="your username"
            required={true}
            getValue={(value) => setUsername(value)}
          />
        </div>
        <div className="mb-4 w-full">
          <FormInput
            label="Email"
            type="email"
            placeholder="email@gmail.com"
            required={true}
            getValue={(value) => setEmail(value)}
          />
        </div>
        <div className="mb-4 flex w-full gap-x-[8px]">
          <FormInput
            label="Password"
            type="password"
            placeholder="Your password"
            required={true}
            getValue={(value) => setPasswordCopy1(value)}
          />
          <FormInput
            label="Re-type Password"
            type="password"
            placeholder="Your password"
            required={true}
            getValue={(value) => setPasswordCopy2(value)}
          />
        </div>
        <Button.Default type="primary" label="Submit" />
      </form>
    </div>
  );
}
