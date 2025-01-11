import "./coinBlock.css";

function CoinBlock({ data }) {
  return (
    <div className="coinBlock">
      <img src={data.image} alt={data.name} />
      <h4>{data.name}</h4>
      <h5>Current Price: {data.current_price.toPrecision(6)}€</h5>
      <h5
        className={
          data.price_change_percentage_24h > 0 ? "priceUp" : "priceDown"
        }
      >
        24h Change: {data.price_change_percentage_24h.toPrecision(3)}%
      </h5>
      <h5 className="priceUp">📈 {data.high_24h}</h5>
      <h5 className="priceDown">📉 {data.low_24h}</h5>
    </div>
  );
}

export default CoinBlock;
