import React, { useState } from "react";
import Nav from "../Nav"; // Import the Nav component
import About from "../About"; // Import other components
// import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Header() {

  const [currentTab, setCurrentTab] = useState("About");

  return (
    <header className="header">
      <div className="container">
        <h1>Your Name</h1>
        <Nav setCurrentTab={setCurrentTab} />
        {currentTab === "About" && <About />}
        {/* {currentTab === "Portfolio" && <Portfolio />} */}
        {currentTab === "Contact" && <Contact />}
        {currentTab === "Resume" && <Resume />}
      </div>
    </header>
  );
}

export default Header;
