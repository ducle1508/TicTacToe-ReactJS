import { useState, forwardRef } from "react";
import "./Menu.css";

function Menu(props, ref) {
  const { reset, newRound, popMenu, status } = props;
  return (
    <div className="menu" data-id="menu" ref={ref}>
      <button className="menu-btn" data-id="menu-btn" onClick={popMenu}>
        Actions
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      <div
        className={`items border ${status ? "" : "hidden"}`}
        data-id="menu-items"
      >
        <button
          data-id="reset-btn"
          onClick={() => {
            reset();
            popMenu();
          }}
        >
          Reset
        </button>
        <button
          data-id="new-round-btn"
          onClick={() => {
            newRound();
            popMenu();
          }}
        >
          New Round
        </button>
      </div>
    </div>
  );
}

const forwardedMenu = forwardRef(Menu);
export default forwardedMenu;
