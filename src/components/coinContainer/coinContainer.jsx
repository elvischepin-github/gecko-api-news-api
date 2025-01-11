import CoinBlock from "../coinBlock/coinBlock";

import { useEffect, useState } from "react";

import "./coinContainer.css";

function CoinContainer() {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GeckoAPI = process.env.REACT_APP_GECKO_API;
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&x_cg_demo_api_key=${GeckoAPI}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  useEffect(() => {
    async function getApiData() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setCoinData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error(error);
      }
    }
    getApiData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="coinContainer">
      {coinData.map((coin) => (
        <CoinBlock key={coin.id} data={coin} />
      ))}
    </div>
  );
}
export default CoinContainer;
