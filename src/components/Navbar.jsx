import { Link } from "react-router-dom";
import { FaHome, FaLaptop, FaBriefcase, FaPhone } from "react-icons/fa";

function Navbar() {
  const links =
    "cursor-pointer hover:text-black flex gap-2 items-center text-blue-500 border-1 border-gray-200 px-6 py-4 md:px-12 md:py-3";
  const icons = "w-5";
  return (
    <div>
      <nav className="flex justify-center text-lg list-none gap-2 md:gap-10">
        <li>
          <Link className={links} to="/">
            <FaHome className={icons} />
            <span className="hidden lg:block">Home</span>
          </Link>
        </li>
        <li>
          <Link className={links} to="/projects">
            <FaLaptop className={icons} />
            <span className="hidden lg:block">Projects</span>
          </Link>
        </li>
        <li>
          <Link className={links} to="/experience">
            <FaBriefcase className={icons} />
            <span className="hidden lg:block">Experience</span>
          </Link>
        </li>
        <li>
          <Link className={links} to="/contact">
            <FaPhone className={icons} />
            <span className="hidden lg:block">Contact</span>
          </Link>
        </li>
      </nav>
      <div className="pt-4 w-full border-b border-gray-200"></div>
    </div>
  );
}

export default Navbar;
