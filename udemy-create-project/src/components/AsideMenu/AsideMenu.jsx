import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";

import { default as AsideMenuStyles } from "./AsideMenu.module.scss";
import AdminMenu from "./subcomponents/AdminMenu";
import UserMenu from "./subcomponents/UserMenu";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(AsideMenuStyles);

const ADMIN_TYPE = 1;

const AsideMenu = () => {
  const { user } = useContext(StoreContext);

  const adminMenuComponent =
    user?.accessLevel === ADMIN_TYPE ? <AdminMenu /> : null;
  return (
    <section className={style()}>
      <UserMenu isUserLogged={Boolean(user)} />
      {adminMenuComponent}
    </section>
  );
};

export default AsideMenu;
