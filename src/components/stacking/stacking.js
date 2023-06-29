import StackUnstackBtn from "./stackUnstackBtn/stackUnstackBtn";
import Container from "./container/container";
import stylesStacking from "./stacking.module.css";
import {useState} from "react"

function Stacking() {  
  const [stackToggle, setStackToggle] = useState('1');

      return (
        <div className = {`${stylesStacking.container}`}> 
                <div><StackUnstackBtn stackToggle={stackToggle} setStackToggle={setStackToggle} /></div>
                <div><Container stackToggle={stackToggle} /></div>
                {/* <div className={`${stylesDotMenu.dropdown} ${stylesDotMenu.dropbtn}` }   */}
        </div>
      );
  }

export default Stacking;
