import NewsBlock from "./newsBlock";
import React, { useState } from "react";

import "../styles/blockContainer.css";

const NewsAPI = process.env.REACT_APP_NEWS_API;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NewsAPI}`;
const options = { method: "GET", headers: { accept: "application/json" } };

async function getApiData() {
  try {
    const response = await fetch(url, options);
    const moldingToJson = await response.json();

    return moldingToJson;
  } catch (error) {
    console.error(error);
  }
}
// getApiData();

function BlockContainer() {
  return (
    <div className="BlockContainer">
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
    </div>
  );
}

export default BlockContainer;
