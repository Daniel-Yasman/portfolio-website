import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="flex flex-col w-2xs md:w-xl ">
      <p>
        Hello, I’m Daniel. I’m a recent software engineering graduate with
        training in full-stack development. Open to roles in development.
      </p>
      <br />
      <p>
        If you are interested in getting in touch with me, feel free to{" "}
        <span className="text-blue-500 hover:text-black cursor-pointer">
          <Link to="contact">contact me</Link>
        </span>
        .
      </p>
    </div>
  );
}
export default AboutMe;
