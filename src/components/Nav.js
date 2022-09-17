import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.scss";
import R from "../assets/image/R.png";
import X from "../assets/image/X.png";
class NavTop extends React.Component {
  render() {
    return (
      <div className="NavTop">
        <div className="logo">
          <img src={X} alt="" id="X"/>
          <img src={R} alt="" id="R" />
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "NavActive" : "a")}
              end
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              className={({ isActive }) => (isActive ? "NavActive" : "a")}
            >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "NavActive" : "a")}
            >
              Liên hệ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "NavActive" : "a")}
            >
              Đăng nhập
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavTop;
