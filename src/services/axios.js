import axios from "axios";
import Address from "../constants/Address";

export const getBalance = async (address) => {
  try {
    const res = await axios.get(Address.TESTNET_ACCOUNT_URL2 + address + "/balances");

    if (res.status === 200) {
      let balance = parseInt(res.data.stx.balance, 10);
      return res.data;
    }
    else {
      console.log(res.statusText);
      return;
    }
  }
  catch (err) {
    console.error(err);
  }
}

