import React from "react";
import WalletAddressStyle from "./walletAddress.module.css";

function WalletAddress( {stxAddress} ) {
  return (
    <div className={WalletAddressStyle.container}>
        <div className={WalletAddressStyle.balance}>
        {stxAddress}
        </div>
    </div>
  )
}

export default WalletAddress;
