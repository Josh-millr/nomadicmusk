import { FormInput, Checkbox } from "../components/index";

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
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
