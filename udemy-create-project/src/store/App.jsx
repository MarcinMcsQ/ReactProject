import React from "react";

import Header from "../components/Header/Header.jsx";
import StoreProvider from "./StoreProvider";
import "./App.scss";

const App = () => {
  return (
    <StoreProvider>
      <Header />
    </StoreProvider>
  );
};

export default App;
