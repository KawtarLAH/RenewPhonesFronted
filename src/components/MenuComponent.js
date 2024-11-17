import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './menu-mobile.css'; // Styles pour mobile
import './menu-desktop.css'; // Styles pour desktop

const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRepairClick = () => {
    // Redirige vers le site de réparation dans le même onglet
    window.location.href = 'https://irepairit.netlify.app/';
  };

  return (
    <div>
      {/* Menu pour mobile */}
      <div className="menu-container-mobile">
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
          sx={{ display: { xs: 'block', md: 'none' } }} // Affiché uniquement sur mobile
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} className="menu-item">Accueil</MenuItem>
          <MenuItem onClick={handleMenuClose} className="menu-item">Acheter</MenuItem>
          {/* Lien vers le site de réparation */}
          <MenuItem onClick={() => { handleRepairClick(); handleMenuClose(); }} className="menu-item">Réparer</MenuItem>
          <MenuItem onClick={handleMenuClose} className="menu-item">Echanger</MenuItem>
          <MenuItem onClick={handleMenuClose} className="menu-item">Contact</MenuItem>
        </Menu>
      </div>

      {/* Menu pour ordinateur */}
      <div className="menu-container-desktop">
        <ul className="menu-desktop">
          <li className="menu-item">Accueil</li>
          <li className="menu-item">Acheter</li>
          {/* Lien vers le site de réparation */}
          <li className="menu-item" onClick={handleRepairClick}>Réparer</li>
          <li className="menu-item">Echanger</li>
          <li className="menu-item">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuComponent;
