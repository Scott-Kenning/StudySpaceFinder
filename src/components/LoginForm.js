import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="flex flex-wrap w-full">
      <div className="flex content-between w-full mt-4">
        <label for="username" className="pr-4 w-full">
          Email:
        </label>
        <input
          type="text"
          name="username"
          className="rounded border border-gray-400"
        ></input>
      </div>
      <div className="flex w-full my-4">
        <label for="password" className="pr-4 w-full">
          Password:
        </label>
        <input
          type="text"
          name="password"
          className="rounded border border-gray-400"
        ></input>
      </div>
      <div className="flex justify-center w-full">
        <Link
          to="/"
          className="bg-green-600 text-white border border-gray-400 py-1 px-10 rounded-lg"
        >
          Login
        </Link>
      </div>
      <p className="w-full text-center text-sm mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 underline">
          Sign up here
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
