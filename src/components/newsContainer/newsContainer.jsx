import NewsBlock from "../newsBlock/newsBlock";
import FooterContainer from "../footerContainer/footerContainer";

import "./newsContainer.css";

function NewsContainer() {
  return (
    <div className="newsContainer">
      <NewsBlock />
      <FooterContainer />
    </div>
  );
}

export default NewsContainer;
