import stylesConnectStkUnstkBtn from "./connectStkUnstkBtn.module.css";
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { useEffect, useState } from "react";
import { getBalance } from "../../../services/axios";
import { AnchorMode, PostConditionMode, uintCV, FungibleConditionCode, makeStandardSTXPostCondition, makeStandardFungiblePostCondition, createAssetInfo } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";
import { useConnect } from "@stacks/connect-react";

const BigNum = require("bn.js");

function ConnectStkUnstkBtn({
  stackToggle, 
  stxAddress,
  setStxAddress, 
  setStxBalance,
  setStStxBalance,
  // handleConnect,
  setIsConnected,
  isConnected,
  stxAmount
}) {
  const { doContractCall } = useConnect();

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
        const stxAddress = res.authResponsePayload.profile.stxAddress.testnet;
        setStxAddress(stxAddress);
        setIsConnected(true);
        
        const response = await getBalance(stxAddress);
        console.log(response);
        let stxBalance = response?.stx?.balance;
        let stStxBalance = response?.fungible_tokens["ST32XWNSBQ77DHYAD0CN57FQ1THTYPSEFV08HWGE4.StackedSTX_3::mock-stacked-stx"]?.balance;
        setStxBalance(stxBalance);
        setStStxBalance(stStxBalance);
        console.log(response);
      }
    })
    // if (checkWallet) {

    // }
  }

  const stack = async () => {
    window.alert("STACK");
    const account = stxAddress;
    const comparator = FungibleConditionCode.GreaterEqual;
    // assuming the Stacks (STX) balance before the transaction is 12346
    const amount = new BigNum(stxAmount);
  
    const standardSTXPostCondition = makeStandardSTXPostCondition(
      account,
      comparator,
      amount
    );
    console.log(stxAmount);
    console.log(uintCV(stxAmount));
    doContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any,
      contractAddress: "ST32XWNSBQ77DHYAD0CN57FQ1THTYPSEFV08HWGE4",
      contractName: "StackedSTX_3",
      functionName: "stack",
      functionArgs: [uintCV(stxAmount)],
      postConditionMode: PostConditionMode.Deny,
      postConditions: [standardSTXPostCondition],
      onFinish: (data) => {
        console.log("onFinish:", data);
        window
          .open(
            `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`,
            "_blank"
          )
          .focus();
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    });
  }

  const unstack = async () => {
    window.alert("UNSTACK");
    const account = stxAddress;
    const comparator = FungibleConditionCode.GreaterEqual;
    // assuming the Stacks (STX) balance before the transaction is 12346
    const amount = new BigNum(0);
    let contractAddress = "ST32XWNSBQ77DHYAD0CN57FQ1THTYPSEFV08HWGE4";
    let contractName = "StackedSTX_3";
    let assetName = "mock-stacked-stx";

    const assetInfo = createAssetInfo(contractAddress, contractName, assetName);
    const standardSTXPostCondition = makeStandardFungiblePostCondition(
      account,
      comparator,
      amount,
      assetInfo
    );
    console.log(stxAmount);
    console.log(uintCV(stxAmount));
    doContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any,
      contractAddress: "ST32XWNSBQ77DHYAD0CN57FQ1THTYPSEFV08HWGE4",
      contractName: "StackedSTX_3",
      functionName: "unstack",
      functionArgs: [uintCV(stxAmount)],
      postConditionMode: PostConditionMode.Allow,
      postConditions: [standardSTXPostCondition],
      onFinish: (data) => {
        console.log("onFinish:", data);
        window
          .open(
            `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`,
            "_blank"
          )
          .focus();
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    });
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
