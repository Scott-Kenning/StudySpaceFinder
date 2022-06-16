import Container from "./Containers/Container";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

function SignupPage() {
  return (
    <Container>
      <Link to="/" className="underline w-full">
        Back
      </Link>
      <div className="flex justify-center items-center inset-0">
        <div className="flex mt-32 flex-wrap bg-gray-300 items-center justify-center w-96 p-4 shadow-lg">
          <div className="w-full flex justify-center">
            <div className="rounded-full w-32 h-32 bg-gray-200 border border-black overflow-hidden">
              <div className="mx-9 mt-2 rounded-full w-14 h-14 bg-gray-400"></div>
              <div className="mx-12 -mt-6 w-8 h-8 bg-gray-400"></div>
              <div className="mx-4 -mt-2 rounded-full w-24 h-24 bg-gray-400"></div>
            </div>
          </div>
          <SignupForm />
        </div>
      </div>
    </Container>
  );
}

export default SignupPage;
