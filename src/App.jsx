import NewsBlock from "./components/newsBlock.jsx";

const GeckoAPI = process.env.REACT_APP_GECKO_API;
const NewsAPI = process.env.REACT_APP_NEWS_API;

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// const url = `https://api.coingecko.com/api/v3/coins/list?x_cg_demo_api_key=${GeckoAPI}`;

// const options = { method: "GET", headers: { accept: "application/json" } };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
//GECKO||GECKO||GECKO||GECKO||GECKO||GECKO||GECKO||GECKO||

function App() {
  return <NewsBlock />;
}

export default App;
