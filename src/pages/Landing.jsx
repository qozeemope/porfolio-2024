import React from "react";
import Navigation from "../components/Navigation";
import me from "../assets/me.png";
import email from "../assets/mail.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Landing() {
  return (
    <div
      className="px-48 bg-[#D7D7D7] h-screen pt-4"
      style={{
        background: "linear-gradient(100deg, #D7D7D7 49%, black 49%)",
      }}
    >
      <Navigation />
      <main className="flex justify-between items-center">
        <section>
          <p className="font-bold mb-8">Hi 👋 I am </p>
          <p>
            <span className="font-bold text-3xl">Qozeem Opeyemi Salami</span>
          </p>
          <p className="font-bold text-[#909090] mb-8">
            Front-end Developer / UI Designer
          </p>
          <div>
            <ul className="flex gap-4">
              <li
                className=" bg-[#C4C4C4] p-2 drop-shadow-2xl shadow-xl
"
              >
                <a href="#">
                  {" "}
                  <img src={email} alt="" className="w-6 h-6" />
                </a>
              </li>
              <li
                className=" bg-[#C4C4C4] p-2 drop-shadow-2xl shadow-xl
"
              >
                <a href="#">
                  {" "}
                  <img src={github} alt="" className="w-6 h-6" />
                </a>
              </li>
              <li
                className=" bg-[#C4C4C4] p-2 drop-shadow-2xl shadow-xl
"
              >
                <a href="#">
                  {" "}
                  <img src={linkedin} alt="" className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <img src={me} alt="" />
      </main>
    </div>
  );
}

export default Landing;
