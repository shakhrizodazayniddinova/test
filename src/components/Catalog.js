import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProductTable from "./ProductTable";
import { useState } from 'react';

function Catalog() {
  const [activeTab, setActiveTab] = useState("Товары");

  const tabs = ["Товары", "Категории", "Единицы измерения"];

  return (
    <div className="catalog-container">
      <h2>Каталог/Материалы</h2>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tabs-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="table-container">
        <div className="table-control">
          <button className="add-btn">
            <FontAwesomeIcon icon={faPlus} className='plus-icon' /> 
            Добавить
          </button>
          
          <div className="filter-bar">
            <label className="filter-label">Фильтры</label>
            <input className="filter-input" type="text" placeholder="Название" />
            <input className="filter-input" type="text" placeholder="Категория" />
          </div>
        </div>

        <ProductTable />
      </div>
    </div>
  );
}

export default Catalog;
