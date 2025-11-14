function Education() {
  return (
    <div className="text-sm flex w-xs md:w-lg flex-col gap-4">
      <header className="font-semibold text-4xl">Education</header>

      <p>
        Studied at
        <span className="text-blue-500">
          <a href="https://www.aac.ac.il/"> Ashkelon Academic College </a>
        </span>
        and currently completing a Diploma in Practical Software Engineering (in
        progress, expected 2026) (הנדסאי תוכנה).
      </p>

      <p>Relevant coursework included below.</p>

      <ul className="list-disc ml-6">
        <li>Frontend development (React, HTML, CSS, JS)</li>
        <li>Backend development fundamentals</li>
        <li>MongoDB and SQL databases</li>
        <li>Algorithms and programming (Java)</li>
        <li>Data structures and object-oriented programming</li>
        <li>Object-oriented software analysis and design</li>
        <li>Python programming and basic cryptography</li>
        <li>Operating systems (Linux)</li>
        <li>Software QA and testing</li>
      </ul>
    </div>
  );
}

export default Education;
