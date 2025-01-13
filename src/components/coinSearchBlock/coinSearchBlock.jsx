import "./coinSearchBlock.css";

function CoinSearchBlock() {
  return (
    <div className="coinSearchBlock">
      <input type="text" placeholder="Bitcoin" />
      <button className="searchCoin">Go</button>
    </div>
  );
}

export default CoinSearchBlock;
