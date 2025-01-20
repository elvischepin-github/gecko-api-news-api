import React, { useState, useEffect} from "react";
import "./resizablePanel.css"
import { Resizable } from "re-resizable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function ResizablePanel () {

    const [isVisible, setIsVisible] = useState(false);
    const [favoriteCoins, setFavoriteCoins] = useState([]);
    const [coinInput, setCoinInput] = useState("");

    const allowedCoins = ["bitcoin", "ethereum", "xrp", "tether", "solana", "bnb", "dogecoin", "usdc", "lido staked ether", "tron", "avalanche", "chainlink", "sui", "stellar", "wrapped bitcoin", "hedera", "wrapped steth", "shiba inu", "polkadot", "weth", "litecoin", "bitcoin cash", "leo token", "uniswap", "official trump", "bitget token", "pepe", "hyperliquid", "wrapped eeth", "near protocol", "usds", "ethena usde", "aptos", "internet computer", "aave", "ondo", "vechain", "pol (ex-matic)", "monero", "ethereum classic", "render", "mantra", "algorand", "bittensor", "mantle", "cronos", "dai", "okb", "kaspa", "filecoin", "artificial superintelligence alliance", "arbitrum", "virtuals protocol", "cosmos hub", "tokenize xchange", "bonk", "ethena", "gate", "optimism", "celestia", "stacks", "coinbase wrapped btc", "injective", "theta network", "immutable", "raydium", "binance staked sol", "xdc network", "sonic", "the graph", "binance-peg weth", "jupiter", "worldcoin", "first digital usd", "lombard staked btc", "kelp dao restaked eth", "fartcoin", "dogwifhat", "movement", "pudgy penguins", "flare", "sei", "rocket pool eth", "fasttoken", "quant", "floki", "gala", "lido dao", "mantle staked ether", "the sandbox", "marinade staked sol", "jasmycoin", "usual usd", "solv protocol solvbtc", "nexo", "eos", "kaia", "kucoin"];

    const formatCoinName = (coin) => {
        return coin.charAt(0).toUpperCase() + coin.slice(1).toLowerCase();
    }

    const saveFavoritesToLocalStorage = (favorites) => {
        localStorage.setItem("favoriteCoins", JSON.stringify(favorites));
    };

    const addCoinToFavorites = () => {
        if (coinInput.trim() === "") return;
    
        const newCoin = formatCoinName(coinInput.trim().toLowerCase());
    
        if (!allowedCoins.map(coin => formatCoinName(coin.toLowerCase())).includes(newCoin)) {
            setCoinInput("");
            return;
        }
    
        if (favoriteCoins.includes(newCoin)) {
            setCoinInput("");
            return;
        }
    
        let updatedCoins = [...favoriteCoins];
    
        if (updatedCoins.length >= 4) {
            updatedCoins.shift();
        }
    
        updatedCoins.push(newCoin);
        setFavoriteCoins(updatedCoins);
        saveFavoritesToLocalStorage(updatedCoins);
        setCoinInput("");
    };

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favoriteCoins"));
        if (savedFavorites && Array.isArray(savedFavorites)) {
            setFavoriteCoins(savedFavorites);
        }
    }, []);

    return (

        <div className="resizablePanelContainer">
            <button 
                className="toggleButton"
                onClick={() => setIsVisible(!isVisible)}
            >
                <FontAwesomeIcon icon={isVisible ? faArrowLeft : faArrowRight}/>
            </button>
            <div
                className={`resizablePanel ${isVisible ? "panelVisible" : "panelHidden"}`}
            >
                {(
                    <Resizable
                        defaultSize={{
                            width: 575,
                            height: 175,
                        }}
                        minWidth={535}
                        maxWidth={650}
                        minHeight={175}
                        maxHeight={175}
                        className="resizableContent"
                    >
                        <div className="panelContent">
                            <div className="coinList">
                                {favoriteCoins.map((coin, index) => (
                                    <div key={index} className="coinItem">
                                        {formatCoinName(coin)}
                                    </div>
                                ))}
                            </div>

                            <div className="bottomSection">
                                <input
                                    type="text"
                                    value={coinInput}
                                    onChange={(e) => setCoinInput(e.target.value)}
                                    placeholder="Enter coin name"
                                    className="coinInput"
                                />
                                <button onClick={addCoinToFavorites} className="custom-button">Add to Favorites</button>
                            </div>
                        </div>
                    </Resizable>
                )}
            </div>
        </div>
    );
}

export default ResizablePanel;

