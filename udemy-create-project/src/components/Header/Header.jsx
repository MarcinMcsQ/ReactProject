import React, { useState, useContext } from "react";
import bemCssModules from "bem-css-modules";

import LoginForm from "../LoginForm/LoginForm";

import { StoreContext } from "../../store/StoreProvider";

import { default as HeaderStyles } from "./Header.module.scss";

const style = bemCssModules(HeaderStyles);

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user, setUser } = useContext(StoreContext);

  const handleOnClose = () => setIsModalOpen(false);

  const handleOnClick = () => {
    if (Boolean(user)) {
      setUser(null);
    } else {
      setIsModalOpen(true);
    }
  };

  const setProperlyLabel = Boolean(user) ? "Wyloguj się" : "Zaloguj Się";
  return (
    <header className={style()}>
      <div className={style("logo-wraper")} />
      <h1 className={style("title")}>Sklep z marzeniami</h1>
      <button onClick={handleOnClick}>{setProperlyLabel}</button>
      <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen} />
    </header>
  );
};

export default Header;
