import React from "react";
//import local comps
import AppBar from "./nav";
import DisplayCartItems from './cartDisplay';

const Cart: React.FC<{}> = () => {
  return (
    <div>
      <AppBar />
      <DisplayCartItems />
    </div>
  );
};

export default Cart;
