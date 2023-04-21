import React, { useState } from "react";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";

function App() {
  const productsList = [
    { name: "Iphone", price: 800, id: 1 },
    { name: "Watch", price: 100, id: 2 },
  ];
  const [products, setProducts] = useState(productsList);
  const [newProducts, setNewProducts] = useState({
    name: "",
    price: 0.01,
    id: 3,
  });

  const changeName = (e) => {
    setNewProducts((prev) => ({ ...prev, name: e.target.value }));
  };

  const changePrice = (e) => {
    setNewProducts((prev) => ({ ...prev, price: e.target.value }));
  };

  const validator = () => {
    if (
      /^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)* *$/.test(newProducts.name) &&
      newProducts.price > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const addProducts = () => {
    let isValid = validator();
    if (isValid) {
      let key = Math.random();
      setNewProducts({ name: "", price: 0.01, id: key });
      setProducts((prev) => [...prev, newProducts]);
    }
  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  return (
    <div className="wrapper">
      <AddProduct
        validator={validator}
        newProducts={newProducts}
        changeName={changeName}
        changePrice={changePrice}
        addProducts={addProducts}
      />
      <div className="list">
        {products.map((product) => (
          <Product
            onRemove={removeProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
