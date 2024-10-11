import React from "react";
import logo from "../assets/logo.svg";

function Navigation() {
  return (
    <div className="flex justify-between text-[#fff]">
      <img src={logo} alt="" />
      <ul className="flex justify-between px-14 font-bold text-xs items-center w-1/2">
        <li>About me</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>
          <button className="bg-white text-black py-2 px-4 rounded-full">
            CONTACT ME
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
