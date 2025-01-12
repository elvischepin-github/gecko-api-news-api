import NavBarContainer from "./components/navBarContainer/navBarContainer";
import ThreeBlock from "./components/threeBlock/threeBlock";
import NewsContainer from "./components/newsContainer/newsContainer";
import CoinContainer from "./components/coinContainer/coinContainer";
import FooterContainer from "./components/footerContainer/footerContainer";


function App() {
  return (
    <>
      <NavBarContainer />
      <ThreeBlock />
      <CoinContainer/>
      <NewsContainer />
      <FooterContainer/>
    </>
  );
}

export default App;
