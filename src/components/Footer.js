import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Footer.css'; // Importer les styles CSS du footer

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#007a6b', // Vert pour correspondre à ton thème
        color: 'white',
        textAlign: 'center',
        padding: '20px 10px',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" sx={{ fontSize: '14px' }}>
        © {new Date().getFullYear()} Renew Phones. Tous droits réservés.
      </Typography>
      <Typography variant="body2" sx={{ marginTop: '5px', fontSize: '12px' }}>
        <a href="/mentions-legales" className="footer-link">Mentions légales</a> | 
        <a href="/contact" className="footer-link"> Contactez-nous</a>
      </Typography>
    </Box>
  );
};

export default Footer;
