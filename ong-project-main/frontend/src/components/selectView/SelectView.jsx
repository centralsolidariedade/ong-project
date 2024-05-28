import "./SelectView.css";
import React, { useState } from "react";
import SimpleView from "./SimpleView";
import AdvancedView from "./AdvancedView";

const SelectView = () => {
  const [view, setView] = useState("simple");

  return (
    <div className="select-view">
      <div className="container-botoes">
        <button
          onClick={() => setView("simple")}
          className="button__select_view1"
        >
          Simple view
        </button>
        <div className="separatorSelect"></div>
        <button
          onClick={() => setView("advanced")}
          className="button__select_view2"
        >
          Advanced view
        </button>
      </div>
      {view === "simple" && <SimpleView />}
      {view === "advanced" && <AdvancedView />}
    </div>
  );
};

export default SelectView;
