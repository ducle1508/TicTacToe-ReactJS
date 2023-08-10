import { players } from "./Utilities";
import "./Turn.css";

export default function Turn(props) {
  const { handleChange, state } = props;
  return (
    <div
      className={`turn ${players[state.playerTurn].colorClass}`}
      onClick={() => {
        if (
          state.playerTurn === "Player 1" ||
          state.playerTurn === "Player 2"
        ) {
          return;
        } else {
          const decideTurn = Math.random() < 0.5 ? "Player 1" : "Player 2";
          handleChange({ ...state, playerTurn: decideTurn });
        }
      }}
    >
      <i className={`fa-solid ${players[state.playerTurn].iconClass}`}></i>
      <p>{players[state.playerTurn].text}</p>
    </div>
  );
}
