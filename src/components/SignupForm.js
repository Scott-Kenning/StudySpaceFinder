import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <div className="flex flex-wrap w-full">
      <div className="flex content-between w-full mt-8">
        <label for="username" className="pr-4 w-full">
          Email:
        </label>
        <input
          type="email"
          name="username"
          placeholder="Netlink@uvic.ca"
          className="rounded border border-gray-400"
        ></input>
      </div>
      <div className="flex w-full mt-2">
        <label for="password" className="pr-4 w-full">
          Password:
        </label>
        <input
          type="text"
          name="password"
          placeHolder="Password"
          className="rounded border border-gray-400"
        ></input>
      </div>
      <div className="flex w-full my-2">
        <label for="reenter-password" className="pr-4 w-full">
          Re-enter Password:
        </label>
        <input
          type="text"
          name="reenter-password"
          placeholder="Re-enter Password"
          className="rounded border border-gray-400"
        ></input>
      </div>
      <div className="flex justify-center w-full">
        <Link
          to="/"
          className="bg-green-600 text-white border border-gray-400 py-1 px-10 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SignupForm;
