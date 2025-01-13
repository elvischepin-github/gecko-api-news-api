import React, { useState } from "react";
import "./coinSearchBlock.css";

function CoinSearchBlock({ onSearch }) {
  const [coinOfInterest, setCoinOfInterest] = useState("");

  async function FnSearchCoinTriangle() {
    let coinSearchBlock = document.querySelector(".searchBlock");

    await new Promise((resolve) => setTimeout(resolve, 200));
    coinSearchBlock.classList.toggle("searchCoinToggle");
  }

  function searchCoin() {
    onSearch(coinOfInterest);
    setCoinOfInterest("");
  }

  return (
    <>
      <div className="searchBlock">
        <h4>Type in your coin of interest!</h4>
        <input
          value={coinOfInterest}
          onChange={(e) => setCoinOfInterest(e.target.value)}
          type="text"
          placeholder="Bitcoin..."
        />
        <button onClick={searchCoin} className="custom-button search-button">
          Search
        </button>
      </div>
      <div onClick={FnSearchCoinTriangle} className="searchTriangle"></div>
    </>
  );
}

export default CoinSearchBlock;
