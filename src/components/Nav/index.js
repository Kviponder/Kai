import React, { useState } from "react";

function Nav(props) {
  const {setCurrentTab} = props

  const menuItems = [
    { name: "About me", tab: "About" },
    { name: "Portfolio", tab: "Portfolio" },
    { name: "Contact", tab: "Contact" },
    { name: "Resume", tab: "Resume" },
    { name: "Blog", tab: "Blog"}
  ];

  return (
    <nav className="Nav">
      <ul className="flex-row nav nav-tabs">
        {menuItems.map((item) => (
          <li className="mx-2" key={item.tab}>
            <a href={`#${item.tab}`} onClick={() => setCurrentTab(item.tab)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
