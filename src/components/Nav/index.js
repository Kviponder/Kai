import React from "react";

function Nav({ setCurrentTab }) {
  const menuItems = [
    { name: "About me", tab: "About" },
    { name: "Portfolio", tab: "Portfolio" },
    { name: "Contact", tab: "Contact" },
    { name: "Resume", tab: "Resume" },
  ];

  return (
    <nav className="Nav navbar navbar-default">
      <ul className="flex-row nav nav-tabs ">
        {menuItems.map((item) => (
          <li key={item.tab}>
            <a
              href={`#${item.tab}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentTab(item.tab);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
