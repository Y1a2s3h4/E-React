import React, { Component } from "react";
import { ProductConsumer } from "./context";
import { EProducts } from "./Products";
import Product from "./Product";
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: EProducts,
      cart: []
    };
  }
  render() {
    // const { addCart } = this.props;
    return (
      <div className="container">
        <div className="row">
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
          {/* {products.map(product => (
            <div key={product.id} className="col-md-4">
              <div
                className="card mb-5"
                style={{ width: "18rem", maxHeight: 780 }}
              >
                <img
                  src={product.product_img}
                  className="card-img-top mt-2"
                  style={{ width: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title" id="product-name">
                    {product.product_name}
                  </h5>
                  {/* <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p> /*}
                  <p className="text-muted" id="product-price">
                    {product.product_price}
                  </p>
                  <a
                    href="#cart"
                    onClick={addCart}
                    className="shadow btn btn-primary"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}
