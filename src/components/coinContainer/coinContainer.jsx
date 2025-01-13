import CoinBlock from "../coinBlock/coinBlock";
import { useEffect, useState } from "react";
import "./coinContainer.css";

function CoinContainer({ searchedCoin }) {
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

        const filteredData = searchedCoin
          ? data.filter(
              (coin) =>
                coin.name.toLowerCase().includes(searchedCoin.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(searchedCoin.toLowerCase())
            )
          : data;

        setCoinData(filteredData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error(error);
      }
    }
    getApiData();
  }, [url, options, searchedCoin]);

  if (loading) return <div className="loader"></div>;
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
