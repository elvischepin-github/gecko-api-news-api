import { useState, useEffect, useTransition } from "react";
import { div } from "three/webgpu";
import { v4 as uuid } from "uuid";
import "./coinBlock.css";

function CoinBlock() {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GeckoAPI = process.env.REACT_APP_GECKO_API;
  const url = `https://api.coingecko.com/api/v3/coins/xiaojie?x_cg_demo_api_key=${GeckoAPI}`;
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
    <div className="coinBlock">
      <h4>{coinData.name}</h4>
      <img src={coinData.image.large} alt="" />
      <h5>Current price: {coinData.market_data.current_price.eur}€</h5>
      <h5 className="priceChange">
        Price change (24h): {coinData.market_data.price_change_percentage_24h}
      </h5>
      <p>Up votes: {coinData.sentiment_votes_up_percentage}%</p>
      <p>Down votes: {coinData.sentiment_votes_down_percentage}%</p>
      <a href="#">Homepage</a>
      <br />
      <a href="#">Block chain site</a>
      <br />
      <p>
        {coinData.description.en}. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eum sapiente incidunt, praesentium laudantium nobis
        ipsam nam officiis cupiditate delectus optio qui veritatis debitis
        veniam a architecto earum repellendus, quisquam temporibus?
      </p>
    </div>
  );
}
// $0.004742

export default CoinBlock;

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

// ============================
//   const GeckoAPI = process.env.REACT_APP_GECKO_API;
//   const url = `https://api.coingecko.com/api/v3/coins/chinese-doge-wow?x_cg_demo_api_key=${GeckoAPI}`;
//   const options = { method: "GET", headers: { accept: "application/json" } };
//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error(err));
