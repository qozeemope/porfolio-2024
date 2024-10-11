import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
  return (
    <>
      <Landing />
      <Profile />
      <About />
    </>
  );
}

export default App;
