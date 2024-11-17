// src/components/Search.js

import React from 'react';
import './Search.css'; // Ajoutez cette ligne pour lier le CSS

const Search = ({ searchQuery, handleSearchChange }) => {
  return (
    <div className="search-container">
      <div className="search-item">
        <input
          type="text"
          name="brand"
          value={searchQuery.brand}
          onChange={handleSearchChange}
          placeholder="Rechercher par marque"
          className="search-input"
        />
      </div>
      <div className="search-item">
        <input
          type="text"
          name="model"
          value={searchQuery.model}
          onChange={handleSearchChange}
          placeholder="Rechercher par modèle"
          className="search-input"
        />
      </div>
      <div className="search-item">
        <input
          type="text"
          name="color"
          value={searchQuery.color}
          onChange={handleSearchChange}
          placeholder="Rechercher par couleur"
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Search;
