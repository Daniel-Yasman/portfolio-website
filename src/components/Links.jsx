import { FaGithub, FaArrowCircleDown } from "react-icons/fa";
function Links() {
  const links = "flex items-center gap-1 px-5 py-2 rounded-lg";
  return (
    <div className="flex gap-8">
      <a
        className={`bg-gray-600 text-white ${links}`}
        href="https://github.com/Daniel-Yasman"
      >
        <FaGithub /> Github
      </a>
      <a
        className={`bg-blue-500 text-white ${links}`}
        href="https://drive.google.com/uc?export=download&id=1M7Jy-aJOb8bj4UziTlhhsg2-QeJ_Rprc"
      >
        <FaArrowCircleDown />
        Download CV
      </a>
    </div>
  );
}
export default Links;
