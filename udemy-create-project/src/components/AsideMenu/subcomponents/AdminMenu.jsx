import React from "react";
import bemCssModules from "bem-css-modules";
import { Link } from "react-router-dom";

import { default as AsideMenuStyles } from "../AsideMenu.module.scss";

const style = bemCssModules(AsideMenuStyles);

const AdminMenu = ({ isUserLogged }) => (
  <>
    <p className={style("title")}>Panel Admina</p>
    <nav>
      <ul>
        <li className={style("link")}>
          <Link to="/manage-courses">Zarządzanie Marzeniami</Link>
        </li>
        {isUserLogged && (
          <li className={style("link")}>
            <Link to="/my-courses">Moje spełnione marzenia</Link>
          </li>
        )}
      </ul>
    </nav>
  </>
);

export default AdminMenu;
