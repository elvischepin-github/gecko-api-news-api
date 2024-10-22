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
  return (
    <div
      style={{ border: "1px solid black", width: "350px", textAlign: "center" }}
    >
      <h3>Title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        corporis beatae accusamus? A minima ratione dicta vel praesentium dolor
        cupiditate vitae expedita iure, laudantium explicabo.
      </p>
      <i>dd/mm/yyyy</i>
    </div>
  );
}

export default NewsBlock;
