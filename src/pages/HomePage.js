import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fade, Slide } from 'react-awesome-reveal';
import './Home.css'; // Importer les styles CSS spécifiques

const useStyles = makeStyles((theme) => ({
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

  return (
    <div className={classes.mainContainer}>
      {/* Section Header avec texte mis en valeur */}
      <div className={classes.headerSection}>
        <Fade triggerOnce duration={1000}>
          <Typography variant="h2" className={classes.title}>
            Bienvenue chez Renew Phones
          </Typography>
        </Fade>
        <Fade triggerOnce duration={1500}>
          <Typography variant="h5" className={classes.subtitle}>
            Achetez, échangez et réparez vos smartphones en toute simplicité.
          </Typography>
        </Fade>
      </div>

      {/* Sections Acheter, Échanger, Réparer */}
      <div className={classes.sectionContainer}>
        <Slide triggerOnce duration={2500} direction="up">
          <Box className={classes.sectionCard}>
            <Typography variant="h6" className={classes.sectionTitle}>Acheter</Typography>
            <Typography variant="body1" className={classes.sectionDescription}>
              Découvrez nos smartphones neufs et d'occasion à des prix compétitifs.
            </Typography>
          </Box>
        </Slide>
      </div>

      <div className={classes.sectionContainer}>
        <Slide triggerOnce duration={3000} direction="up">
          <Box className={classes.sectionCard}>
            <Typography variant="h6" className={classes.sectionTitle}>Échanger</Typography>
            <Typography variant="body1" className={classes.sectionDescription}>
              Reprenez vos anciens téléphones et bénéficiez d'une offre avantageuse.
            </Typography>
          </Box>
        </Slide>
      </div>

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
