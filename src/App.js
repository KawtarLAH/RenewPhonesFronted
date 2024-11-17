import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Ton fichier global de styles
import Home from './pages/HomePage';
import './index.css';


const App = () => {
  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: '1' }}>
        {/* Contenu principal ici */}
        <Home/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
