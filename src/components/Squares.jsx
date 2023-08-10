import { cloneElement } from "react";
import { checkWin, players } from "./Utilities";
import "./Squares.css";

export default function Squares(props) {
  const { state, handleChange, popModal, popTurnDecider } = props;

  return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((squareId) => {
    let existingMove = "";
    for (let p in state.moves) {
      if (state.moves[p].includes(squareId)) {
        existingMove = p;
      }
    }

    return (
      <div
        key={squareId}
        className="square shadow"
        data-id="square"
        onClick={() => {
          if (state.playerTurn === "Default") {
            popTurnDecider();
            return;
          }
          if (existingMove) {
            return;
          }

          const cloneState = structuredClone(state);
          cloneState.moves[cloneState.playerTurn].push(squareId);
          cloneState.playerTurn =
            cloneState.playerTurn === "Player 1" ? "Player 2" : "Player 1";
          const gameResult = checkWin(cloneState.moves);
          if (["Player 1", "Player 2", "Tie"].includes(gameResult)) {
            cloneState.gameResult = gameResult;
            cloneState.scores[gameResult] += 1;
            popModal();
          }
          handleChange(cloneState);
        }}
      >
        {existingMove && (
          <i
            className={`fa-solid 
            ${players[existingMove].iconClass} 
            ${players[existingMove].colorClass}`}
          ></i>
        )}
      </div>
    );
  });
}
