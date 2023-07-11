import React from "react";
import stylesInputBox from "./inputBox.module.css";
import { useRef } from "react";

function InputBox({ setStxAmount, stxBalance, image }) {
  const inputRef = useRef();
  return (
    <div className={`${stylesInputBox.flexInput}`}>
      <div>
        <div className={`${stylesInputBox.STXLogo}`}>
          <img src={image} alt="STX Logo" />
        </div>
        <div>
          <input type="number" placeholder="amount" ref={inputRef} onChange={(e) => {
            console.log(e.target.value);
            setStxAmount(e.target.value);
            }} />
          <input type="number" placeholder="amount" />
        </div>
      </div>
      <div className={`${stylesInputBox.Max}`} onClick={() => {
          console.log("click");
          // let stxBalRef = stxBalance;
          inputRef.current.value = stxBalance;
        }}>Max</div>
    </div>
  );
}

export default InputBox;
