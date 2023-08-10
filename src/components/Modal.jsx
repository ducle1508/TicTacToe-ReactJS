import "./Modal.css";

export default function Modal(props) {
  const { status, popModal, result, reset } = props;
  return (
    <div className={`modal ${status ? "" : "hidden"}`} data-id="modal">
      <div className="modal-contents">
        <p data-id="modal-text">
          {result === "Tie" ? "Tie!" : result + " wins!"}
        </p>
        <button
          data-id="modal-btn"
          onClick={() => {
            reset();
            popModal();
          }}
        >
          Play again
        </button>
      </div>
    </div>
  );
}
