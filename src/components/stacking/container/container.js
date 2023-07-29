import InputBox from "./inputBox";
import ConnectStkUnstkBtn from "./connectStkUnstBtn";
import Info from "./info";
import stylesContainer from "./container.module.css";
import STXImage from "../../../images/STX.png";
import stSTXImage from "../../../images/stSTX.png";
import WalletAddress from "./walletAddress";
import {useState} from "react"


function Container({ stackToggle }) {
  const [stxAddress, setStxAddress] = useState("");
  const [stxBalance, setStxBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);


  let imageToShow;
  let connectWalletState;

  if (stackToggle === "1") {
    imageToShow = STXImage; // Set the image for stackToggle 1
    connectWalletState = "connected"; // Set the state for stackToggle 1

  } else if (stackToggle === "2") {
    imageToShow = stSTXImage; // Set the image for stackToggle 2
    connectWalletState = "disconnected"; // Set the state for stackToggle 2

  }

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <div className={`${stylesContainer.container} ${isConnected ? stylesContainer.connected : ''}`}>
      {stackToggle === "1" && (
        <>
          <div className={`${stylesContainer.empty}`}></div>
          <InputBox image={imageToShow} />
          <ConnectStkUnstkBtn 
          stackToggle={stackToggle} 
          setStxAddress={setStxAddress} 
          setStxBalance={setStxBalance} 
          isConnected={isConnected} // Pass isConnected as a prop
          setIsConnected={setIsConnected} // Pass setIsConnected as a prop
          handleConnect={handleConnect}
          />
          {isConnected && <WalletAddress stxAddress={stxAddress} />}
          <Info stxBalance={stxBalance}/>
        </>
      )}

      {stackToggle === "2" && (
        <>
          <div className={`${stylesContainer.empty}`}></div>
          <InputBox image={imageToShow} 
          setStxAmount={setStxAmount} />
          <ConnectStkUnstkBtn 
          stackToggle={stackToggle} 
          stxAddress={stxAddress} 
          setStxAddress={setStxAddress} 
          setStxBalance={setStxBalance} 
          isConnected={isConnected} // Pass isConnected as a prop
          setIsConnected={setIsConnected} // Pass setIsConnected as a prop
          handleConnect={handleConnect}
          />          
          {isConnected && <WalletAddress stxAddress={stxAddress} />}
          <Info stxBalance={stxBalance}/>
        </>
      )}
    </div>
  );
}

export default Container;
