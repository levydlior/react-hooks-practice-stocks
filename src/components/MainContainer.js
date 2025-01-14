import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockArray, setStockArray] = useState([]);
  const [boughtStocks, setBoughtStocks] = useState([]);

  function handleFetchData(arrayOfData) {
    setStockArray(arrayOfData);
  }

  function handleBuyingStock(stockObj) {
    const exist = boughtStocks.find((stock) => stock.id === stockObj.id);

    if (!exist) {
      setBoughtStocks([...boughtStocks, stockObj]);
    } else {
      setBoughtStocks(boughtStocks.filter((stock => stock.id !== stockObj.id)))
    }
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer
            onFetchData={handleFetchData}
            stockArray={stockArray}
            onBuyingStock={handleBuyingStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            boughtStocks={boughtStocks}
            onBuyingStock={handleBuyingStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
