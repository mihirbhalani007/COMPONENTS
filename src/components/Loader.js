import React from "react";
import "../styles/loader.scss";
// import themeConfig from "@configs/themeConfig";

export const LoaderComponent = () => {
  return (
    <div className="fallback-spinner">
      <div className="loading">
        <div className="effect-1 effects"></div>
        <div className="effect-2 effects"></div>
        <div className="effect-3 effects"></div>
      </div>
    </div>
  );
};
