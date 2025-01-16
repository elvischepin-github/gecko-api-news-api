import NewsBlock from "../newsBlock/newsBlock";
import FooterContainer from "../footerContainer/footerContainer";

import "./newsContainer.css";

function NewsContainer({ searchedNews }) {
  return (
    <div className="newsContainer">
      <NewsBlock searchedNews={searchedNews} />
      <FooterContainer />
    </div>
  );
}

export default NewsContainer;
