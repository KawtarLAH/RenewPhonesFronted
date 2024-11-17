import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import menuData from './menu.json'; // Importer les données du menu
import './menu-mobile.css'; // Import des styles mobile
import './menu-desktop.css'; // Import des styles desktop

const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (link, external) => {
    if (external) {
      window.location.href = link;
    } else {
      // Utilisez React Router si vous avez une navigation interne
      window.location.pathname = link;
    }
    handleMenuClose();
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
          {menuData.menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => handleMenuItemClick(item.link, item.external || false)}
              className="menu-item"
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* Menu pour desktop */}
      <div className="menu-container-desktop">
        <ul className="menu-desktop">
          {menuData.menuItems.map((item, index) => (
            <li
              key={index}
              className="menu-item"
              onClick={() => handleMenuItemClick(item.link, item.external || false)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Bouton d'accès Vendeur */}
        <div className="seller-access-container">
          <button className="access-seller-btn" onClick={() => handleMenuItemClick(menuData.sellerAccess.link)}>
            {menuData.sellerAccess.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
