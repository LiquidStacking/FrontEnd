import stylesConnectStkUnstkBtn from "./connectStkUnstkBtn.module.css";
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { useEffect, useState } from "react";
import { getBalance } from "../../../services/axios";


function ConnectStkUnstkBtn({
  stackToggle, 
  setStxAddress, 
  setStxBalance,
  handleConnect,
  setIsConnected,
  isConnected
}) {  
  const appConfig = new AppConfig(['store_write', 'publish_data']);
  const userSession = new UserSession({appConfig});
  const connect = () => {
    const myAppName = "Liquid Staking";
    const myAppIcon = window.location.origin + '/my_logo.png';
    showConnect({
      userSession,
      appDetails: {
        name: myAppName,
        icon: myAppIcon,
      },
      onFinish: async (res) => {
        window.alert("Connection Succeed!");
        console.log(res.authResponse);
        console.log(res.authResponsePayload);
        console.log(res.authResponsePayload.profile.stxAddress.testnet);
        const stxAddress = res.authResponsePayload.profile.stxAddress.testnet;
        setStxAddress(stxAddress);
        setIsConnected(true);

        // console.log(Address.TESTNET_ACCOUNT_URL + stxAddress);
        // console.log(HttpServices);
        const response = await getBalance(stxAddress);
        setStxBalance(response);
        console.log(response);
      }
    })
    // if (checkWallet) {

    // }
  }

  const stack = () => {
    window.alert("STACK");
  }

  const unstack = () => {
    window.alert("UNSTACK");
  }

  const errorFunc = () => {
    window.alert("ERROR");
  }

      return (
        <div className = {`${stylesConnectStkUnstkBtn.container}`}>
          <div className = {`${stylesConnectStkUnstkBtn.button}`} style={{ backgroundColor: !isConnected ? "" : stackToggle === "1" ? "#F47D2D" : 'purple' }} onClick={!isConnected ? connect : stackToggle === "1" ? stack : stackToggle === "2" ? unstack : errorFunc}>
            {!isConnected ? "Connect Wallet" : stackToggle === "1" ? "Stack STX" : stackToggle = "2" ? "Unstack STX" : "Error"}
          </div>
        </div>

                    
      );
  }

export default ConnectStkUnstkBtn;
