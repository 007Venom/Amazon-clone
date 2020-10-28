import React from "react";
import "./Checkout.css";

import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";

function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__Ad"
          src="https://selfpublishingadvice.org/wp-content/uploads/2019/05/How-to-Set-Up-an-Amazon-UK-Advertising-Account-1.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__Title">Your shopping Basket</h2>
          {basket.map(item => (
             <CheckoutProduct
             id={item.id}
             title={item.title}
             price={item.price}
             image={item.image}
             />
             
          ))} 
        </div>
      </div>
      
        <Subtotal />
      
    </div>
  );
}

export default Checkout;
