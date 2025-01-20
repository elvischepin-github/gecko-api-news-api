import React from "react";
import { motion } from "framer-motion";
import "./coinBlock.css";

function CoinBlock({ data }) {
  return (
    
    <motion.div
      className="coinBlock"
      id="crypto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
      }}
    >
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
    </motion.div>
  );
}

export default CoinBlock;
