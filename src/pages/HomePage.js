import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fade, Slide } from 'react-awesome-reveal';
import './HomePages.css'; // Importer les styles CSS spécifiques

const useStyles = makeStyles(() => ({
  mainContainer: {
    backgroundColor: '#f4f7f6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    paddingTop: '80px',
    position: 'relative',
  },
  headerSection: {
    backgroundColor: '#00bfae',
    color: 'white',
    padding: '50px 20px',
    width: '100%',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    marginBottom: '40px',
  },
  title: {
    fontWeight: 700,
    fontSize: '3rem',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  sectionContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '40px',
  },
  sectionCard: {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    textAlign: 'center',
    marginBottom: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer', // Indiquer que la section est cliquable
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  sectionTitle: {
    fontWeight: 600,
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#333',
  },
  sectionDescription: {
    fontSize: '1rem',
    color: '#555',
  },
}));

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={classes.mainContainer}>
      {/* Section Header */}
      <div className={classes.headerSection}>
        <Fade triggerOnce duration={1000}>
          <Typography variant="h2" className={classes.title}>
            Bienvenue chez Renew Phones
          </Typography>
        </Fade>
        <Fade triggerOnce duration={1500}>
          <Typography variant="h5" className={classes.subtitle}>
            Achetez, réparez vos smartphones en toute simplicité.
          </Typography>
        </Fade>
      </div>

      {/* Section Acheter */}
      <div className={classes.sectionContainer}>
        <Slide triggerOnce duration={2500} direction="up">
          <Box
            className={classes.sectionCard}
            onClick={() => handleNavigate('/phoneslist')} // Redirection vers la page phoneslist
          >
            <Typography variant="h6" className={classes.sectionTitle}>Acheter</Typography>
            <Typography variant="body1" className={classes.sectionDescription}>
              Découvrez nos smartphones neufs et d'occasion à des prix compétitifs.
            </Typography>
          </Box>
        </Slide>
      </div>

      {/* Section Réparer */}
      <div className={classes.sectionContainer}>
        <Slide triggerOnce duration={3500} direction="up">
          <a href="https://irepairit.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Box className={classes.sectionCard}>
              <Typography variant="h6" className={classes.sectionTitle}>Réparer</Typography>
              <Typography variant="body1" className={classes.sectionDescription}>
                Confiez-nous vos téléphones pour les réparer rapidement et efficacement.
              </Typography>
            </Box>
          </a>
        </Slide>
      </div>
    </div>
  );
};

export default Home;
