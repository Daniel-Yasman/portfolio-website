import { FaUser, FaLocationArrow, FaGraduationCap } from "react-icons/fa";

function MyCard() {
  const span = "flex items-center gap-1";
  const icons = "w-6 h-5";
  return (
    <div className="text-lg pt-4 w-xl flex flex-col md:flex-row justify-center items-center gap-10">
      <img
        className="rounded-full w-[250px] h-[250px]"
        src="profile-picture.jpg"
      />
      <div className="flex flex-col">
        <header className="text-4xl pb-10 font-semibold text-center md:text-left">
          Daniel Yasman
        </header>
        <span className={span}>
          <FaUser className={icons} /> Junior Full-Stack Developer
        </span>
        <span className={span}>
          <FaLocationArrow className={icons} />
          Ashkelon, Israel
        </span>
        <span className={span}>
          <FaGraduationCap className={icons} />
          Software Engineering Diploma
        </span>
      </div>
    </div>
  );
}
export default MyCard;
