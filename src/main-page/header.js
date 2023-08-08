// import { Component } from "react";
import logo from "./GloboLogo.png"


const Header = ({ subtitle, title }) => (
  <header className="row">
    <div className="col-md-5">
      <img src={logo} className="logo" alt="logo" />
      <div className="col-md-7 mt-5 subtitle">
        {subtitle}
      </div>
    </div>
  </header>
);

export default Header