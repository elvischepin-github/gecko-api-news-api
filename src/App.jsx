import CoinContainer from "./components/coinContainer/coinContainer";
import CoinSearchBlock from "./components/coinSearchBlock/coinSearchBlock";
import FooterContainer from "./components/footerContainer/footerContainer";
import NavBarContainer from "./components/navBarContainer/navBarContainer";
import NewsContainer from "./components/newsContainer/newsContainer";
import ThreeBlock from "./components/threeBlock/threeBlock";

function App() {
  return (
    <>
      <CoinSearchBlock />
      <NavBarContainer />
      <ThreeBlock />
      <CoinContainer />
      <NewsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
