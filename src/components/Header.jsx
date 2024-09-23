import React, { useState } from "react";
import menu from "../assets/images/menu.svg";
import search from "../assets/images/search.svg";
import setting from "../assets/images/setting.svg";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const currentPage = window.location.pathname;
  
    return (
      <header className="header">
        <div className="containerSite">
          <nav>
            <div className="button">
              <span className="btn-category" onClick={toggleMenu}>
                <img src={menu} alt="Menu button" />
              </span>
              <h3 className="bodytext">DOTABUFF</h3>
            </div>
  
            <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                {currentPage !== '/home' && (
                  <li><Link to="/">Home</Link></li>
                )}
                <li><Link to="/Stats">Stats</Link></li>
                <li><Link to="/Stats">Heroes</Link></li>
                <li><Link to="/Stats">Community</Link></li>
              </ul>
            </div>
  
            <div className="double-menu">
              <div className="search">
                <span className="head-items">
                  <img src={search} alt="search" />
                </span>
              </div>
              <div className="username">
                <p>NAME</p>
              </div>
              <div className="setting">
                <span className="head-items">
                  <img src={setting} alt="setting" />
                </span>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  };
  

export default Header;