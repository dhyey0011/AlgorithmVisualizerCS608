import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    
    //backgroundColor: '#0d4f3e',
    
    minHeight: '100vh',
    display: 'flex',
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },

  imageCard: {
    fontSize: '100px'
  }

  
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      
      <ImageCard place={places[0]} checked={checked} />
      
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[2]} checked={checked} />
      <ImageCard place={places[3]} checked={checked} />
      
    </div>
  );
}
