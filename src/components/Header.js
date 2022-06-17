import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  const windowSize = useWindowSize();

  return (
    <>
      <div className="w-full bg-purple-700 flex p-2 md:px-8">
        <div className="p-2 w-full">
          <Link to="/" className="text-xl text-white text-bold">
            Study Space Finder
          </Link>
        </div>
       { windowSize.width > 600 ? <div className="flex items-center">
          <Link to="/" className="p-2 text-white">
            Classrooms
          </Link>
          <Link to="/group" className="p-2 w-max whitespace-nowrap text-white">
            Group Sessions
          </Link>
          <Link to="/login" className="p-2 text-white">
            Login
          </Link>
        </div> : <div className="text-white">
            Mini menu
        </div>
}
      </div>
      <div className="w-full bg-purple-600 h-4" />
    </>
  );
}

export default Header;
