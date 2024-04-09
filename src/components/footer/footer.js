import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import CSS file for styling
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

const Footer = () => {

  return (
    <div className="footer-container">
      <ul className="nav nav-pills nav-fill footercss ">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <HomeOutlinedIcon style={{ marginRight: "5px", marginLeft: "10px" }} />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/taskform" className="nav-link">
            <button className="floating-button">
              <h3>+</h3>
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/console" className="nav-link">
            <ListAltOutlinedIcon />
            <p>Console</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
