import React, { useState } from "react";
import "./newsSearchBlock.css";

function NewsSearchBlock({ onSearch }) {
  const [newsOfInterest, setNewsOfInterest] = useState("");

  async function FnSearchNewsTriangle() {
    let newsSearchBlock = document.querySelector(".newsSearch");

    await new Promise((resolve) => setTimeout(resolve, 200));
    newsSearchBlock.classList.toggle("searchNewsToggle");
  }

  function searchNews() {
    onSearch(newsOfInterest);
    setNewsOfInterest("");
  }

  return (
    <>
      <div className="searchBlock newsSearch">
        <h4>
          What <i className="blank">News</i> you want to see?
        </h4>
        <input
          value={newsOfInterest}
          onChange={(e) => setNewsOfInterest(e.target.value)}
          type="text"
          placeholder="Leave blank crypto!"
          onKeyDown={(e) => (e.key === "Enter" ? searchNews() : null)}
        />
        <button onClick={searchNews} className="custom-button search-button">
          Search
        </button>
      </div>
      <div
        onClick={FnSearchNewsTriangle}
        className="searchTriangle newsToggle"
      ></div>
    </>
  );
}

export default NewsSearchBlock;
