import "./coinBlock.css";

function CoinBlock({ data }) {
  return (
    <div className="coinBlock">
      <img src={data.image} alt={data.name} />
      <h4>{data.name}</h4>
      <h5>Current Price: {data.current_price.toPrecision(6)}€</h5>
      <h5>24h Stats:</h5>
      <ul>
        <li>
          Change{" "}
          <span
            className={
              data.price_change_percentage_24h > 0 ? "priceUp" : "priceDown"
            }
          >
            {data.price_change_percentage_24h.toPrecision(3)}%
          </span>
        </li>
        <li>Highest {data.high_24h}€</li>
        <li>Lowest {data.low_24h}€</li>
      </ul>
    </div>
  );
}

export default CoinBlock;
