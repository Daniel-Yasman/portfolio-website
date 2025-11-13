import { Link } from "react-router-dom";
import { FaHome, FaLaptop, FaBriefcase, FaPhone } from "react-icons/fa";

function Navbar() {
  const links =
    "cursor-pointer hover:text-black flex gap-2 items-center text-blue-500 border-1 border-gray-200 px-12 py-3";
  const icons = "w-5";
  return (
    <div>
      <nav className="flex justify-center text-lg list-none gap-10">
        <li>
          <Link className={links} to="/">
            <FaHome className={icons} />
            Home
          </Link>
        </li>
        <li>
          <Link className={links} to="/projects">
            <FaLaptop className={icons} />
            Projects
          </Link>
        </li>
        <li>
          <Link className={links} to="/experience">
            <FaBriefcase className={icons} />
            Experience
          </Link>
        </li>
        <li>
          <Link className={links} to="/contact">
            <FaPhone className={icons} />
            Contact
          </Link>
        </li>
      </nav>
      <div className="pt-4 w-full border-b border-gray-200"></div>
    </div>
  );
}

export default Navbar;
