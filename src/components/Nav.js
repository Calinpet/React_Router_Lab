import React from "react";
import { Link } from "react-router-dom";

function Nav() {
return (
    <div className="nav">
      <div><Link to="/stocks">Home</Link></div>
      <div><Link to="/about">About</Link></div>
   </div>
  );
}

export default Nav;