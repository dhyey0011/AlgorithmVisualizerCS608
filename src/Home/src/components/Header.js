  import React, { useEffect, useState } from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  import { Link as Scroll } from 'react-scroll';

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Verdana, Arial, Tahoma, Serif',
    },
    appbar: {
      background: 'none',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '1',
    },
    icon: {
      color: '#fff',
      fontSize: '2rem',
    },
    colorText: {
      color: '#0d4f3e',
    },
    container: {
      textAlign: 'center',
      
    },
    title: {
      color: '#fff',
      fontSize: '4.5rem',
    },
    goDown: {
      color: '#0d4f3e',
      fontSize: '4rem',
    },
      gridcontainer: { //does nothing -- pk
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5% auto',
      marginLeft: '350px',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      backgroundColor: '#0d4f3e',
      maxWidth: '1000px',
      fontFamily: 'Verdana, Arial, Tahoma, Serif !important',
    }    
  }));
  export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      setChecked(true);
    }, []);
    return (
      <div className={classes.root} id="header">

        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={5}
        >
          <div className={classes.container}>
            <h1 className={classes.title}>
              Welcome to <br />
              <span className={classes.colorText}>Algorithm Visualizer</span>
            </h1>
            
            <Scroll to="place-to-visit" smooth={true} duration={0}>
              <IconButton>
              
                <ExpandMoreIcon className={classes.goDown} />
                
              </IconButton>
            </Scroll>
            
          </div>
        </Collapse>
      </div>
    );
  }
