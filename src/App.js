import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav"; // Import the Nav component
import JumboTron from "./components/JumboTron";
import About from "./components/About"; // Import other components
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";


function App() {
  const [currentTab, setCurrentTab] = useState("About");

  return (
    <div className="App">
      <Header />
      <Nav setCurrentTab={setCurrentTab} />
      <JumboTron />
      {currentTab === "About" && <About />}
      {currentTab === "Portfolio" && <Portfolio />}
      {currentTab === "Contact" && <Contact />}
      {currentTab === "Resume" && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
