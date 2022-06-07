import React, { useState } from "react";

import Products from "./components/Products/Products";

import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  // console.log(products);

  return (
    <div className="App">
      <Products products={products} />
    </div>
  );
}

export default App;
