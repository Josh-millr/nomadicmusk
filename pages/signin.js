import { FormInput, Checkbox, Button } from "../components/index";

export default function SignIn() {
  return (
    <div className="my-[16vh] w-full px-[24px] sm:grid sm:justify-center">
      <form className="grid-row-1 grid grid-cols-1 justify-items-center sm:w-[420px]">
        <div className="mb-[16px] w-full">
          <FormInput
            label="Your Email"
            type="email"
            placeholder="email@gmail.com"
            required={true}
            getValue={(value) => console.log(value)}
          />
        </div>
        <div className="mb-[16px] w-full">
          <FormInput
            label="Your Password"
            type="password"
            placeholder="Your password"
            required={true}
            getValue={(value) => console.log(value)}
          />
        </div>
        <div className="mb-[16px] w-full">
          <Checkbox label="Remember me" />
        </div>
        <Button.Default label="Submit" />
      </form>
    </div>
  );
}
