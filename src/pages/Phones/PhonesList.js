// src/pages/Phones/PhonesList.js

import React, { useState, useEffect } from 'react';
import phonesData from './phones.json';
import Search from './Search'; // Importation du composant Search
import './PhonesList.css';

const PhonesList = () => {
  const [phones, setPhones] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    brand: '',
    model: '',
    color: ''
  });

  useEffect(() => {
    setPhones(phonesData); // Charger tous les téléphones au départ
  }, []);

  // Fonction pour gérer la recherche
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Filtrage des téléphones selon la recherche
  const filteredPhones = phones.filter((phone) => {
    return (
      (phone.brand.toLowerCase().includes(searchQuery.brand.toLowerCase())) &&
      (phone.model.toLowerCase().includes(searchQuery.model.toLowerCase())) &&
      ((phone.color || '').toLowerCase().includes(searchQuery.color.toLowerCase())) // Vérification si phone.color existe
    );
  });

  return (
    <div className="phones-list-wrapper">
      <div className="phones-list-container">
        <header>
          <h1>Trouvez le téléphone de vos rêves à prix réduit!</h1>
          {/* Intégration du composant Search */}
          <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
        </header>

        <div className="phones-grid">
          {filteredPhones.length === 0 ? (
            <p>Aucun téléphone trouvé avec ces critères. Essayez un autre filtre.</p>
          ) : (
            filteredPhones.map((phone) => (
              <div key={phone.id} className="phone-card">
                {/* Affichage de l'image du téléphone */}
                <img src={phone.image} alt={phone.model} className="phone-image" />
                <div className="phone-info">
                  <h2>{phone.brand} {phone.model}</h2>
                  <p>État : {phone.condition}</p>
                  <p>Prix : {phone.price}€</p>
                  {phone.color && <p>Couleur : {phone.color}</p>} {/* Affichage de la couleur si elle existe */}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PhonesList;
