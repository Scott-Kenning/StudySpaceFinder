import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="w-screen bg-purple-700 flex px-8">
            <Link to="/" className="text-xl text-white text-bold p-4 w-full">Study Space Finder</Link>
            <Link to="/" className="p-4 text-white">Home</Link>
            <Link to="/login" className="p-4 text-white">Login</Link>
            <Link to="/buildings" className="p-4 text-white">Buildings</Link>
        </div>
    )
}

export default Header;