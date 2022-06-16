import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="w-full bg-purple-700 flex py-2 px-8">
        <div className="p-2 w-full">
          <Link to="/" className="text-xl text-white text-bold">
            Study Space Finder
          </Link>
        </div>
        <Link to="/" className="p-2 text-white">
          Classrooms
        </Link>
        <Link to="/review" className="p-2 w-max whitespace-nowrap text-white">
          Review Sessions
        </Link>
        <Link to="/login" className="p-2 text-white">
          Login
        </Link>
      </div>
      <div className="w-full bg-purple-600 h-4" />
    </>
  );
}

export default Header;
