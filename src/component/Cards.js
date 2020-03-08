import React, { Component } from "react";
import { EProducts } from "./Products";
export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      products: EProducts
    };
  }
  addToCart = e => {
    alert("Added TO Cart");
    e.target.textContent = "Added to Cart";
  };
  render() {
    const { products } = this.state;

    return (
      <div className="container">
        <div className="row">
          {products.map(product => (
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
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <p className="text-muted">{product.product_price}</p>
                  <a
                    href="#cart"
                    onClick={this.addToCart}
                    className="shadow btn btn-primary"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="col-md-4">
          <div class="card mb-5" style={{ width: "18rem" }}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51FwsSj8knL._SX679_.jpg"
              class="card-img-top mt-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">OnePlus 7 Pro</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="text-muted">₹ 42,999.00</p>
              <a href="#cart" class="shadow btn btn-primary">
                Add To Cart
              </a>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}
