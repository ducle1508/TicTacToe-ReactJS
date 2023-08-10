import { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "./UseLocalStorage";
import "./App.css";

import Menu from "./components/Menu";
import Turn from "./components/Turn";
import Squares from "./components/Squares";
import Scoreboard from "./components/Scoreboard";
import TurnDecider from "./components/TurnDecider";
import Modal from "./components/Modal";

const initialState = {
  moves: { "Player 1": [], "Player 2": [] },
  playerTurn: "Default",
  gameResult: "",
  scores: { "Player 1": 0, "Player 2": 0, "Tie": 0 },
};

export default function App() {
  const [state, setState] = useLocalStorage("game-state-key", initialState);
  const [modalOpen, setModalOpen] = useLocalStorage("modal-state-key", false);
  const [turnDeciderOpen, setTurnDeciderOpen] = useLocalStorage(
    "turn-decider-state-key",
    false
  );
  const [menuOpen, setMenuOpen] = useLocalStorage("menu-state-key", false);

  const menuRef = useRef(null);

  let handler = (event) => {
    if (!menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });

  function reset() {
    setState((prev) => ({ ...initialState, scores: prev.scores }));
  }

  function newRound() {
    setState((prev) => initialState);
  }

  function updateState(newState) {
    setState((prev) => newState);
  }

  function popModal() {
    setModalOpen((prev) => !prev);
  }

  function closeMenu() {
    if (menuOpen) {
      setMenuOpen((prev) => !prev);
    }
  }
  function popMenu() {
    setMenuOpen((prev) => !prev);
  }

  function popTurnDecider() {
    setTurnDeciderOpen((prev) => !prev);
  }

  return (
    <div className="page">
      <div className="container">
        <Turn handleChange={updateState} state={state} />
        <Menu
          reset={reset}
          newRound={newRound}
          popMenu={popMenu}
          status={menuOpen}
          ref={menuRef}
        />
        <Squares
          handleChange={updateState}
          state={state}
          popModal={popModal}
          popTurnDecider={popTurnDecider}
        />
        <Scoreboard scores={state.scores} />
      </div>
      <TurnDecider popTurnDecider={popTurnDecider} status={turnDeciderOpen} />
      <Modal
        status={modalOpen}
        popModal={popModal}
        result={state.gameResult}
        reset={reset}
      />
    </div>
  );
}
