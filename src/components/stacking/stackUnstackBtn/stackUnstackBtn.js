import stylesButton from "./stackUnstackBtn.module.css";

function StackUnstackBtn({ stackToggle, setStackToggle }) {
  return (
    <div className={`${stylesButton.btn}`}>
      <div
        className={`${stylesButton.stack}`}
        onClick={() => setStackToggle("1")}
        style={{ backgroundColor: stackToggle === "1" ? '' : 'transparent' }}
      >
        Stack
      </div>
      <div
        className={`${stylesButton.unstack}`}
        onClick={() => setStackToggle("2")}
        style={{ backgroundColor: stackToggle === "2" ? '' : 'transparent' }}
      >
        Unstack
      </div>
    </div>
  );
}

export default StackUnstackBtn;
