import React, { Component } from "react";
import { ProductConsumer } from "./context";
import CartItem from "./CartItem";
export default class Cart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div className="container">
                  <div className="row">
                    {cart.map(item => (
                      <CartItem key={item.id} item={item} value={value} />
                    ))}
                  </div>
                  <div className="ml-auto">
                    <button className="shadow btn btn-primary ">
                      Check Out
                    </button>
                  </div>
                </div>
              );
            } else {
              return <h1>Your Cart is Empty!!!</h1>;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
