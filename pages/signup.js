import { FormInput, Checkbox, Button } from "../components/index";

export default function SignUp() {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 justify-items-center gap-y-[40px] py-[16vh] px-[24px] sm:grid sm:justify-center">
      <div className="grid grid-cols-1 grid-rows-1 justify-items-center  gap-y-[8px]">
        <h1 className="text-3xl font-bold text-[#ffffff]">Sign Up</h1>
        <p className="text-xs text-[#95959f] sm:text-xs">
          Sign up to the platform to get started
        </p>
      </div>
      <form className="grid-row-1 grid w-full grid-cols-1 justify-items-center sm:w-[420px]">
      <div className="mb-[16px] w-full flex gap-x-[8px]">
          <FormInput
            label="Firstname"
            type="text"
            placeholder="adamu"
            required={true}
            getValue={(value) => console.log(value)}
          />
          <FormInput
            label="Lastname"
            type="text"
            placeholder="musa"
            required={true}
            getValue={(value) => console.log(value)}
          />
        </div>
        <div className="mb-[16px] w-full">
          <FormInput
            label="Username"
            type="text"
            placeholder="your username"
            required={true}
            getValue={(value) => console.log(value)}
          />
        </div>
        <div className="mb-[16px] w-full">
          <FormInput
            label="Email"
            type="email"
            placeholder="email@gmail.com"
            required={true}
            getValue={(value) => console.log(value)}
          />
        </div>
        <div className="mb-[16px] w-full flex gap-x-[8px]">
          <FormInput
            label="Password"
            type="password"
            placeholder="Your password"
            required={true}
            getValue={(value) => console.log(value)}
          />
          <FormInput
            label="Re-type Password"
            type="password"
            placeholder="Your password"
            required={true}
            getValue={(value) => console.log(value)}
          />
        </div>
        <Button.Default label="Submit" />
      </form>
    </div>
  );
}
