import React from "react";

function About() {
  return (
    <div className="py-24 bg-[#FFFFFF] flex flex-col items-center justify-center">
      <h1 className="uppercase text-center border- font-bold border-2 border-black w-max py-1 px-12 text-xl mb-10">
        About me
      </h1>
      <p className="mx-80 text-center">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </p>

      <h1 className="uppercase text-center border-r-2 font-bold border-l-2 border-black w-max py-1 px-12 text-xl my-24">
        explore
      </h1>
    </div>
  );
}

export default About;
