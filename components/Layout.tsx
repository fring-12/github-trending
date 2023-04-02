import React, { ReactHTML } from "react";
import Nav from "@/styles/Nav.module.css";
import Footer from "@/styles/Footer.module.css";

const Layout = ({ children }: any) => {
  const personalInfo = {
    name: "Banedict Fring Drong",
    email: "banedictfring12@gmail.com",
  };

  const header = () => {
    const menuItems: MenuItem[] = [
      { name: "Home", link: "/" },
      { name: "Top User by Country", link: "/users" },
      { name: "Top repositories", link: "/repos" },
    ];

    return (
      <nav id="nav" className={Nav.navBar}>
        <div style={{ width: "30%" }}>
          <p className={Nav.projectTitle}>Github Trending</p>
        </div>
        <ul className={Nav.listsItems}>
          {menuItems.map((menuItem: MenuItem) => (
            <li key={menuItem.link}>
              <a href={menuItem.link}>{menuItem.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  const footer = () => {
    return (
      <div className={Footer.main}>
        <div>
          <p className={Footer.title}>{personalInfo.name}</p>
        </div>
        <div>
          <p className={Footer.title}>{personalInfo.email}</p>
        </div>
      </div>
    );
  };
  return (
    <div>
      {header()}
      <div>{children}</div>
      {footer()}
    </div>
  );
};

export default Layout;
