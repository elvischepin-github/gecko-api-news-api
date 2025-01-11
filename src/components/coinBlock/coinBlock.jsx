import { useEffect, useState } from "react";
import "./coinBlock.css";

function CoinBlock() {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GeckoAPI = process.env.REACT_APP_GECKO_API;
  const url = `https://api.coingecko.com/api/v3/coins/ethereum?x_cg_demo_api_key=${GeckoAPI}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  useEffect(() => {
    async function getApiData() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setCoinData(data);
        setLoading(false);
        // for (let i = 0; i < data.length; i++) {
        //   console.log(`index:${i}`, data[i]);
        // }
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
    <div className="coinBlock">
      <h4>{coinData.name}</h4>
      <img src={coinData.image.large} alt="" />
      <h5>Current price: {coinData.market_data.current_price.eur}€</h5>
      <h5 className="priceChange">
        Price change (24h): {coinData.market_data.price_change_percentage_24h}
      </h5>
      <a href="#" className="blockChain">
        Block chain site
      </a>
    </div>
  );
}

export default CoinBlock;
