import stocks from "../components/stock-data";
import { Link } from "react-router-dom";

//Looping over that array to generate a link 
function Dashboard (props) {
  return (
    <div>
        {stocks.map((stock, idx) => {
            const {name, symbol} = stock;
            return (
              <Link to={`/stocks/${symbol}`}>
                  <h2>{name}</h2>
              </Link>
            );
        })}
    </div>
  );
}

// We must export the component to use it in other files
export default Dashboard;