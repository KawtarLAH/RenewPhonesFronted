import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Assurez-vous d'utiliser Router
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PhonesList from './pages/Phones/PhonesList'; // Importez la page PhonesList
import './App.css'; // Styles globaux
import './index.css';

const App = () => {
  return (
    <Router> {/* Le Router enveloppe toute l'application */}
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: '1' }}>
          <Routes> {/* Définir les Routes ici */}
          <Route path="/" element={<HomePage />} />
            <Route path="/phoneslist" element={<PhonesList />} /> {/* Route pour PhonesList */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
