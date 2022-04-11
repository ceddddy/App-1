import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 8900, quantity: 1 },
      { id: 2, productName: "Sony Camera", price: 4500, quantity: 2 },
      { id: 3, productName: "iPad Pro", price: 12400, quantity: 4 },
      { id: 4, productName: "Samsung QLED TV", price: 7745, quantity: 3 },
      { id: 5, productName: "Xbox", price: 7780, quantity: 5 },
      { id: 6, productName: "Dell Monitor", price: 880, quantity: 6 },
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            //invoking child component(Product)
            return (
              <Product key={prod.id} product={prod}>
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
}
