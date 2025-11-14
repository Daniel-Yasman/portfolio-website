import { FaLink, FaGithub } from "react-icons/fa";
function Projects() {
  const links =
    "flex items-center justify-center gap-1 bg-gray-200 text-sm w-[150px] h-[40px] rounded-lg";
  const tags = "border p-1 text-sm";
  return (
    <div className="flex flex-col items-center md:items-start">
      <header className="font-semibold text-5xl py-6">Projects</header>
      {/* Eventually do nice prop friendly cards. */}
      {/* Card */}
      <div className="flex flex-col gap-2 items-center md:items-start">
        <img src="/platter/Home page.png" className="w-xs md:w-2xl" />
        <header className="font-semibold text-2xl">Platter</header>
        <div className="flex flex-wrap w-xs md:w-fit gap-3">
          <span className={`${tags} border-blue-400 text-blue-400`}>React</span>
          <span className={`${tags} border-yellow-400 text-yellow-400`}>
            Node.js
          </span>
          <span className={`${tags} border-orange-400 text-orange-400`}>
            Express
          </span>
          <span className={`${tags} border-lime-400 text-lime-400`}>
            MongoDB
          </span>
          <span className={`${tags} border-green-400 text-green-400`}>
            Mongoose
          </span>
          <span className={`${tags} border-cyan-400 text-cyan-400`}>
            Tailwind CSS
          </span>
        </div>
        <p className="w-xs md:w-lg">
          A full restaurant platform I built for my college exam. It includes
          menu browsing, cart updates, reservations with conflict checks, and an
          admin dashboard for managing content and users.
        </p>
        <div className="flex gap-4">
          <a className={links} href="https://platter-chi.vercel.app/">
            <FaLink />
            Visit Website
          </a>
          <a className={links} href="https://github.com/Daniel-Yasman/Platter">
            <FaGithub />
            View Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
