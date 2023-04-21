import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import { Scale } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #54cdb7, #54cdc1)',
    
  },
  gridcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5% auto',
    marginLeft: '50px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    backgroundColor: '#f5f5f5',
    maxWidth: '1400px',
    transform: 'scale(0.9)'
  }    
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className={classes.gridcontainer}>
      <PlaceToVisit />
      </div>
    </div>
  );
}
