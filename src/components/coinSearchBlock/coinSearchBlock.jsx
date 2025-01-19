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
        <h4 className="searchCoinText">
          Search your <i className="blank">Coin</i> of interest!
        </h4>
        <input
          value={coinOfInterest}
          onChange={(e) => setCoinOfInterest(e.target.value)}
          type="text"
          placeholder="Leave blank for all coins!"
          onKeyDown={(e) =>
            e.key === "Enter"
              ? (searchCoin(), (window.location.href = "#crypto"))
              : null
          }
        />
        <p className="searchCoinParagraph">Leave blank for all coins!</p>
        <a href="#crypto" className="search">
          <button onClick={searchCoin} className="custom-button search-button">
            Search
          </button>
        </a>
      </div>
      <div onClick={FnSearchCoinTriangle} className="searchTriangle"></div>
    </>
  );
}

export default CoinSearchBlock;
