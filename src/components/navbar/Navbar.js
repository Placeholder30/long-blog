import React from "react";
import "./Navbar.scss";
import { SearchSvg, NotificationSvg, UserSvg } from "../../svg/Svg";
function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">{"<longblog/>"}</div>
        <div className="right-icons">
          <div className="search">
            <SearchSvg />
          </div>
          <div className="notifications">
            <NotificationSvg />
          </div>
          <div className="profile">
            <UserSvg />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
