import React from "react";
// import spinner from "../icons/Ball-Spinner.svg";
import { ReactComponent as Ball } from "../icons/Ball-Spinner.svg";

function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
      <Ball />
    </div>
  );
}

export default Spinner;
