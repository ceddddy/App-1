import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 8900, quantity: 1 },
      { id: 1, productName: "Sony Camera", price: 4500, quantity: 2 },
      { id: 1, productName: "iPad Pro", price: 12400, quantity: 4 },
      { id: 1, productName: "Samsung QLED TV", price: 7745, quantity: 3 },
      { id: 1, productName: "Xbox", price: 7780, quantity: 5 },
      { id: 1, productName: "Dell Monitor", price: 880, quantity: 6 },
    ],
  };

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>

        <div>
          {this.state.products.map(() => {
            return <Product />;
          })}
        </div>
      </div>
    );
  }
}
