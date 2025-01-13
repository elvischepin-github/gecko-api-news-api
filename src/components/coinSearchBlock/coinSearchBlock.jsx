import React, { useState } from "react";
import "./coinSearchBlock.css";

function CoinSearchBlock({ onSearch }) {
  const [coinOfInterest, setCoinOfInterest] = useState("");

  const coinTriangleToggle = document.querySelector(".coinSearchBlock");
  // const coinSearchText = document.querySelector(".coin-search-text-toggle");

  function FnCoinTriangleToggle() {
    coinTriangleToggle.classList.toggle("small-triangle");
    console.log(coinTriangleToggle);
    // coinSearchText.classList.toggle("coin-search-text-toggle");
  }

  function searchCoin() {
    onSearch(coinOfInterest);
    setCoinOfInterest("");
  }

  return (
    <div
      onClick={FnCoinTriangleToggle}
      className="coinSearchBlock small-triangle"
    >
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
  );
}

export default CoinSearchBlock;
