import React from 'react';

function CategoryFilter({ categories, setFilteredCategory }) {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <select onChange={(e) => setFilteredCategory(e.target.value)} className="form-select">
            <option value="Todas">Todas</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
