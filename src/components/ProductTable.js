import React from "react";
import products from "../data/products";

function ProductTable() {
  return (
    <div className="table-scroll">
        <table className="product-table">
        <thead>
            <tr>
            <th>Название</th>
            <th>Категория</th>
            <th>Единица измерения</th>
            <th>Базовая цена</th>
            <th>Описание</th>
            <th>Артикул GTIN</th>
            </tr>
        </thead>
        <tbody>
            {products.map((item, index) => (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.unit}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.gtin}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
}

export default ProductTable;
