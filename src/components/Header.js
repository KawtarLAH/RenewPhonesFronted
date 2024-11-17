import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuComponent from './MenuComponent'; // Importer le composant Menu
import './Header.css'; // Importer le fichier CSS

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: '#007a6b' }}> {/* Appliquer le vert ici */}
      <Toolbar>
        <Typography>
          Renew Phones
        </Typography>
        <MenuComponent /> {/* Ajouter le composant Menu ici */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
