import React from "react";

const Header = () => {
  const navbarLinkStyle = {
    display: "inline-block",
    marginRight: "20px",
    textDecoration: "none",
    color: "white",
  };

  return (
    <header
      style={{
        background: "#031F45",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
      }}
    >
      <span style={{ color: "white" }}>Transfert National</span>
      <nav>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li style={{ display: "inline-block" }}>
            <a href="#" style={navbarLinkStyle}>
              Espace utilisateur
            </a>
          </li>
          <li style={{ display: "inline-block" }}>
            <a href="#" style={navbarLinkStyle}>
              Services
            </a>
          </li>
          <li style={{ display: "inline-block" }}>
            <a href="#" style={navbarLinkStyle}>
              Transactions
            </a>
          </li>
          <li style={{ display: "inline-block" }}>
            <a href="#" style={navbarLinkStyle}>
              Log out
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header