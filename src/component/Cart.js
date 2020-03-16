import React, { Component } from "react";
import { ProductConsumer } from "./context";

export default class Cart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="row container">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return <h1>Your Cart!!!</h1>;
            } else {
              return <h1>Your Cart is Empty!!!</h1>;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
