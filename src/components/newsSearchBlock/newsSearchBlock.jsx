import React, { useState } from "react";
import "./newsSearchBlock.css";

function NewsSearchBlock() {
  async function FnSearchNewsTriangle() {
    let newsSearchBlock = document.querySelector(".newsSearch");

    await new Promise((resolve) => setTimeout(resolve, 200));
    newsSearchBlock.classList.toggle("searchNewsToggle");
  }

  return (
    <>
      <div className="searchBlock newsSearch">
        <h4>Enter your keyword to search!</h4>
        <input type="text" placeholder="Crpyto..." />
        <button className="custom-button search-button">Search</button>
      </div>
      <div
        onClick={FnSearchNewsTriangle}
        className="searchTriangle newsToggle"
      ></div>
    </>
  );
}

export default NewsSearchBlock;
