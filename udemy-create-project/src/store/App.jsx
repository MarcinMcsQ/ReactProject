import React from "react";
import { HashRouter as Router } from "react-router-dom";

import AsideMenu from "../components/AsideMenu/AsideMenu";
import Header from "../components/Header/Header.jsx";
import StoreProvider from "./StoreProvider";
import "./App.scss";

const App = () => {
  return (
    <StoreProvider>
      <Header />
      <Router>
        <div className="content-wrapper">
          <AsideMenu />
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
