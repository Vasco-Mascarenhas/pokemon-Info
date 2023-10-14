import React from "react";
import "./datacontainer.css";
const DataContainer = ({ children }) => {
  return <aside className="data-container">{children}</aside>;
};

export default DataContainer;
