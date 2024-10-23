import { Resizable } from "re-resizable";
import React, { useState } from "react";
import '../Styles/NewsBlock.css'
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

function NewsBlock() {
  const [size, setSize] = useState({ width: 200, height: 200 });

  return (
      <Resizable
        size={{ width: size.width, height: size.height }}
        onResizeStop={(e, direction, ref, delta) => {
        setSize({
        width: ref.offsetWidth,
        height: ref.offsetHeight,
        });
      }}
        minWidth={200}
        minHeight={350}
        maxWidth={500}
        maxHeight={500}
      >
        <div className="NewsBlock">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem, dolor rem fugit a laborum ducimus. Ad vel alias aliquid perferendis iure animi ullam quisquam accusamus laborum. Aliquid, corrupti architecto.
          Ullam hic quas cupiditate rem quaerat autem veniam, unde eveniet eaque libero molestiae reprehenderit aliquam, beatae similique optio excepturi tempore sint ut saepe voluptatibus sunt est amet. Nesciunt, a? Accusantium!
          Quo, doloribus voluptate at iste, placeat fugit cum consequuntur quibusdam perspiciatis molestiae temporibus libero nobis pariatur. Dolor officia, cumque rem modi, eius iure repellat doloribus omnis illum pariatur, optio tempora?
          Numquam veniam commodi esse ipsa nisi voluptates error, enim, molestiae sint corrupti fuga neque ex harum quia iusto et sunt unde quod optio quisquam incidunt minus? Sint quaerat tempora eum!
          Iure, nam consequuntur ea accusantium quisquam perspiciatis porro eligendi, quibusdam voluptatum nisi dignissimos omnis consequatur quasi sequi quos velit consectetur quaerat repellat iusto sint voluptatibus? Vero dignissimos corrupti porro consequatur!
        </p>
        <i>dd/mm/yyyy</i>
        </div>
      </Resizable>
  );
}

export default NewsBlock;
