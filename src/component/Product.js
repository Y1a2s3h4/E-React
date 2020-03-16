import React, { Component } from "react";
import { ProductConsumer } from "./context";
export default class Product extends Component {
  render() {
    const { id, product_name, product_img, product_price } = this.props.product;
    return (
      <ProductConsumer>
        {value => {
          return (
            <div key={id} className="col-md-4">
              <div
                className="card mb-5"
                style={{ width: "18rem", maxHeight: 780 }}
              >
                <img
                  src={product_img}
                  className="card-img-top mt-2"
                  style={{ width: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title" id="product-name">
                    {product_name}
                  </h5>

                  <p className="text-muted" id="product-price">
                    {product_price}
                  </p>
                  <a
                    href="#cart"
                    className="shadow btn btn-primary"
                    onClick={() => {
                      value.addCart(id);
                    }}
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
