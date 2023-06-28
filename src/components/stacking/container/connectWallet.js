import stylesConnectWallet from "./connectWallet.module.css";
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { useEffect, useState } from "react";
import { getBalance } from "../../../services/axios";


function ConnectWallet({
  activeTab, 
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

  const checkWallet = () => {

  }

      return (
        <div className = {`${stylesConnectWallet.container}`}>
          <div className = {`${stylesConnectWallet.button}`} style={{ backgroundColor: activeTab === "1" ? '' : 'purple' }} onClick={connect}>
            {isConnected ? "Connected" : "Connect Wallet"}
          </div>
        </div>

                    
      );
  }

export default ConnectWallet;
