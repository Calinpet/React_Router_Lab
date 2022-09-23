import React from "react";

function Stock(props) {
    const stock = props.allStocks.filter(data => data.symbol === props.match.params.symbol)[0]
    return (
      <div>
        <h3>Name: {stock.name}</h3>
        <h3 className="price">Price: {stock.lastPrice}</h3>
      </div>
    )
};

// We must export the component to use it in other files
export default Stock;