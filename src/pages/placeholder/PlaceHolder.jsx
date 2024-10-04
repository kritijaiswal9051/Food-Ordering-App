import { useContext } from "react";
import "./PlaceHolder.css";
import { StoreContext } from "../../context/StoreContext";

function PlaceHolder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivary Information</p>
        <div className="multi-field">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-field">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="PinCode" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="number" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>
                $
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() === 0
                  ? 0
                  : 5}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p>${getTotalCartAmount() + 5}</p>
            </div>
          </div>
          <button>PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceHolder;
