import stylesConnectStkUnstkBtn from "./connectStkUnstkBtn.module.css";
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { useEffect, useState } from "react";
import { getBalance } from "../../../services/axios";
import { makeContractCall, uintCV } from "@stacks/transactions";
const BigNum = require("bn.js");

function ConnectStkUnstkBtn({
  stackToggle, 
  setStxAddress, 
  setStxBalance,
  // handleConnect,
  setIsConnected,
  isConnected,
  stxAmount
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
        console.log(res.authResponsePayload.public_keys[0]);
        const stxAddress = res.authResponsePayload.profile.stxAddress.testnet;
        setStxAddress(stxAddress);
        setIsConnected(true);
        // console.log(getAddressFromPublicKey(res.authResponsePayload.public_keys[0]));

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
    console.log(stxAmount);
    console.log(uintCV(stxAmount));
    // const txOptions = {
    //   contractAddress: "ST32XWNSBQ77DHYAD0CN57FQ1THTYPSEFV08HWGE4.StackedSTX",
    //   contractName: "StackedSTX",
    //   functionName: "stack",
    //   functionArgs: [uintCV(stxAmount)],
    //   senderKey:
    //     "b244296d5907de9864c0b0d51f98a13c52890be0404e83f273144cd5b9960eed01",
    //   // attempt to fetch this contracts interface and validate the provided functionArgs
    //   validateWithAbi: true,
    //   network: new StacksTestnet(), // for mainnet, use `StacksMainnet()`
    // };
  }

  const unstack = () => {
    window.alert("UNSTACK");
  }

  const errorFunc = () => {
    window.alert("ERROR");
  }

      return (
        <div className={`${stylesConnectStkUnstkBtn.container}`} style={{ zIndex: 9999 }}>
          <div className = {`${stylesConnectStkUnstkBtn.button}`} style={{ backgroundColor: !isConnected ? "" : stackToggle === "1" ? "#F47D2D" : 'purple' }} onClick={!isConnected ? connect : stackToggle === "1" ? stack : stackToggle === "2" ? unstack : errorFunc}>
            {!isConnected ? "Connect Wallet" : stackToggle === "1" ? "Stack STX" : stackToggle = "2" ? "Unstack STX" : "Error"}
          </div>
        </div>
      );
  }

export default ConnectStkUnstkBtn;
