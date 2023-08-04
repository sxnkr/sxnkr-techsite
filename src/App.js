import React from "react";

import { Introduction, Navbar, Banner, SocialLinks } from "./components";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Banner />
      <Introduction />
      <SocialLinks />
    </>
  );
};
export default App;
