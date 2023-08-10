import "./TurnDecider.css";

export default function TurnDecider(props) {
  const { popTurnDecider, status } = props;
  return (
    <div
      className={`turn-decider ${status ? "" : "hidden"}`}
      data-id="turn-decider"
    >
      <div className="turn-decider-contents">
        <p data-id="turn-decider-text">
          Click "Determine turn" to decide who goes first!
        </p>
        <button data-id="turn-decider-btn" onClick={popTurnDecider}>
          OK
        </button>
      </div>
    </div>
  );
}
