import stylesInfo from "./info.module.css";
import { formatBigToSmall } from "../../utils/math";

function Info({ stxBalance, stStxBalance }) {
  const formattedStxBalance = formatBigToSmall(stxBalance); // Divide by 10^6 and format to 2 decimal places
  const formattedStStxBalance = formatBigToSmall(stStxBalance);
  return (
    <div className={`${stylesInfo.containerOut}`}>
      <div className={`${stylesInfo.containerIn}`}>
        <div className={`${stylesInfo.leftCol}`}>STX Current Balance</div>
        <div className={`${stylesInfo.rightCol}`}>{formattedStxBalance} STX</div>
      </div>
      <div className={`${stylesInfo.containerIn}`}>
        <div className={`${stylesInfo.leftCol}`}>stSTX Current Balance</div>
        <div className={`${stylesInfo.rightCol}`}>{formattedStStxBalance} stSTX</div>
      </div>
      <div className={`${stylesInfo.containerIn}`}>
        <div className={`${stylesInfo.leftCol}`}>You will receive</div>
        <div className={`${stylesInfo.rightCol}`}>0 stSTX</div>
      </div>
      <div className={`${stylesInfo.containerIn}`}>
        <div className={`${stylesInfo.leftCol}`}>Exchange Rate</div>
        <div className={`${stylesInfo.rightCol}`}>1 STX = 0.9505 stSTX</div>
      </div>
      <div className={`${stylesInfo.containerIn}`}>
        <div className={`${stylesInfo.leftCol}`}>Annual percentage rate</div>
        <div className={`${stylesInfo.rightCol}`}>6.3%</div>
      </div>
    </div>
  );
}

export default Info;
