import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul type="none">
      <li style={{ fontSize: "18px",  marginTop: "20px"}}>
        <Link to="/home" style={{textDecoration:"none",color: "grey",}}> Home</Link>
      </li>
      <li style={{ fontSize: "18px", color: "grey", marginTop: "20px" }}>
        Notification Inbox
      </li>
      <li style={{ fontSize: "18px",  marginTop: "20px"}}>
        <Link to="/main" style={{textDecoration:"none",color: "grey",}}> Recently Published</Link>
      </li>
      <li style={{ fontSize: "18px", color: "grey", marginTop: "20px" }}>
        Add Memories
      </li>
      <li style={{ fontSize: "18px", color: "grey", marginTop: "20px" }}>
        People
      </li>
    </ul>
  );
};
export default Menu;
