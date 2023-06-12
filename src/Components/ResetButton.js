import React from "react";
import "./ResetButton.css";


export function ResetButton({resetBoard}){

  return (
    <div>
        <button className="reset-btn" onClick={resetBoard}>Reset</button>
    </div>
  )
}