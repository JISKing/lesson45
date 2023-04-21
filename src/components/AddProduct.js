import React from "react";

function AddProduct(props) {
  const { validator, newProducts, changeName, changePrice, addProducts } = props;
  return (
    <div className="add">
      <label>Product name</label>
      <input
        onBlur={validator}
        value={newProducts.name}
        type="text"
        onChange={changeName}
      />
      <label>Product price</label>
      <input
        onBlur={validator}
        value={newProducts.price}
        type="number"
        onChange={changePrice}
      />
      <button onClick={addProducts} type="button">
        Add
      </button>
    </div>
  );
}

export default AddProduct;
