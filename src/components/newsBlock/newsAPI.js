const NewsAPI = import.meta.env.VITE_NEWS_API_KEY;

const fetchNews = async (searchQuery) => {
  try {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${NewsAPI}`,
      options
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export default fetchNews;
