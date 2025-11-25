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
        href="https://drive.google.com/file/d/1PyyPGfC2lJAk1R2dxgyAkvkf2KJg57Kk/view?usp=sharing"
      >
        <FaArrowCircleDown />
        Download CV
      </a>
    </div>
  );
}
export default Links;
