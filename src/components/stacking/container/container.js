import InputBox from "./inputBox";
import ConnectWallet from "./connectWallet";
import Info from "./info";
import stylesContainer from "./container.module.css";
import STXImage from "../../../images/STX.png";
import stSTXImage from "../../../images/stSTX.png";
import WalletAddress from "./walletAddress";
import {useState} from "react"


function Container({ activeTab }) {
  const [stxAddress, setStxAddress] = useState("");
  const [stxBalance, setStxBalance] = useState("");


  let imageToShow;
  let connectWalletState;

  if (activeTab === "1") {
    imageToShow = STXImage; // Set the image for activeTab 1
    connectWalletState = "connected"; // Set the state for activeTab 1

  } else if (activeTab === "2") {
    imageToShow = stSTXImage; // Set the image for activeTab 2
    connectWalletState = "disconnected"; // Set the state for activeTab 2

  }

  return (
    <div className={`${stylesContainer.container}`}>
      {activeTab === "1" && (
        <>
          <div className={`${stylesContainer.empty}`}></div>
          <InputBox image={imageToShow} />
          <ConnectWallet activeTab={activeTab} setStxAddress={setStxAddress} setStxBalance={setStxBalance} />
          <WalletAddress stxAddress={stxAddress} />
          <Info stxBalance={stxBalance}/>
        </>
      )}

      {activeTab === "2" && (
        <>
          <div className={`${stylesContainer.empty}`}></div>
          <InputBox image={imageToShow} />
          <ConnectWallet activeTab={activeTab} setStxAddress={setStxAddress} setStxBalance={setStxBalance} />
          <WalletAddress stxAddress={stxAddress} />
          <Info stxBalance={stxBalance}/>
        </>
      )}
    </div>
  );
}

export default Container;
