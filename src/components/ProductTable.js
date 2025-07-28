function ProductTable({ data, type }) {
  return (
    <div className="table-scroll">
      <table className="product-table">
        <thead>
          <tr>
            {type === "Товары" && (
              <>
                <th>Название</th>
                <th>Категория</th>
                <th>Единица измерения</th>
                <th>Базовая цена</th>
                <th>Описание</th>
                <th>Артикул GTIN</th>
              </>
            )}
            {type === "Категории" && (
              <>
                <th>Название</th>
                <th>Описание</th>
              </>
            )}
            {type === "Единицы измерения" && (
              <>
                <th>Обозначение</th>
                <th>Полное название</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {type === "Товары" && (
                <>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.unit}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.gtin}</td>
                </>
              )}
              {type === "Категории" && (
                <>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </>
              )}
              {type === "Единицы измерения" && (
                <>
                  <td>{item.name}</td>
                  <td>{item.short}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
