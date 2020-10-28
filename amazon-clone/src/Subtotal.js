import React from "react";
import "./Subtotal.css";
import CurrenyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";


import { getBasketTotal } from "./Reducer.js";

function Subtotal() {
  

  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="subtotal">
      <CurrenyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__Gift">
              <input type="checkbox" />
              This order contains a gift{" "}
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button >Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
