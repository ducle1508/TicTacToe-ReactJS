import "./Scoreboard.css";

export default function Scoreboard(props) {
  const { scores } = props;
  return (
    <>
      <div
        className="score shadow"
        style={{ backgroundColor: "var(--turquoise)" }}
      >
        <p>Player 1</p>
        <span data-id="p1-wins">{scores["Player 1"]} Wins</span>
      </div>
      <div
        className="score shadow"
        style={{ backgroundColor: "var(--light-gray)" }}
      >
        <p>Ties</p>
        <span data-id="ties">{scores["Tie"]}</span>
      </div>
      <div
        className="score shadow"
        style={{ backgroundColor: "var(--yellow)" }}
      >
        <p>Player 2</p>
        <span data-id="p2-wins">{scores["Player 2"]} Wins</span>
      </div>
    </>
  );
}
