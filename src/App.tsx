import { setBalanceData, setLoadingStatus } from "./store/balance/BalanceSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import EventSource from "eventsource";

const APIKEY = "647b86a4-9805-4a49-aa1c-9a466a1a5422";
const URL = "https://api.zapper.fi/v2/balances?";
const iconList = [
  "BUSD_USDT", "DAIDAI_USDC", "DAIDAI_WETH",
  "WETH_1INCH", "WETH_USDC"
]

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const balanceList: any[] = [];
  const addresses: string[] = [];
  addresses.push(useSelector((state: RootState) => state.user.address));

  const generateUrl = (addresses: string[]) => {
    let url = URL;
    addresses.forEach((address, i) => {
      url += `addresses[]=${address}${i === addresses.length - 1 ? "" : "&"}`
    });
    return url;
  };
  
  const generateEventSourceDict = (apiKey: string) => {
    return {
      withCredentials: true,
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
        "Content-Type": "text/event-stream"
      },
    };
  };

  const eventSource = new EventSource(
    generateUrl(addresses),
    generateEventSourceDict(APIKEY)
  );
  
  eventSource.addEventListener("open", () => {
    dispatch(setLoadingStatus("loading"));
  });
  eventSource.addEventListener("error", (message) => {
    dispatch(setLoadingStatus("idle"));
    console.error(message);
  });
  eventSource.addEventListener("balance", ({ data }) => {
    const parsedData = JSON.parse(data);
    var walletList = Object.values(parsedData.balance.wallet);

    // Interpret parsed data...
    if (parsedData.network === 'ethereum' && walletList.length > 0) {
      walletList.forEach((wallet: any) => {
        balanceList.push({
          protocol: "Uniswap",
          iconName: iconList[Math.floor(Math.random() * iconList.length)],
          poolCode: wallet.address,
          balance: `${parseFloat(wallet.context.balance).toFixed(4)} ${wallet.context.symbol}`,
          status: Math.floor(Math.random() * 3)
        })
      });
      dispatch(setBalanceData(balanceList));
    }
  });
  eventSource.addEventListener("end", () => {
    dispatch(setLoadingStatus("idle"));
    eventSource.close();
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<HomePage />} />
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
