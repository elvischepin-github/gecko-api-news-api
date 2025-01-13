import React, { useState } from "react";

import CoinContainer from "./components/coinContainer/coinContainer";
import CoinSearchBlock from "./components/coinSearchBlock/coinSearchBlock";
import NavBarContainer from "./components/navBarContainer/navBarContainer";
import NewsContainer from "./components/newsContainer/newsContainer";
import ThreeBlock from "./components/threeBlock/threeBlock";

function App() {
  const [searchedCoin, setSearchedCoin] = useState("");

  const handleCoinSearch = (coinValue) => {
    setSearchedCoin(coinValue);
  };

  return (
    <>
      <CoinSearchBlock onSearch={handleCoinSearch} />
      <NavBarContainer />
      <ThreeBlock />
      <CoinContainer searchedCoin={searchedCoin} />
      <NewsContainer />
    </>
  );
}

export default App;
