import React from "react";
import "./layout.css";
import Container from "../container/Container";
import NavBar from "../navBar/NavBar";
const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Container>
        <header className="layout-header">
          <NavBar />
        </header>
        <main className="layout-container">{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
