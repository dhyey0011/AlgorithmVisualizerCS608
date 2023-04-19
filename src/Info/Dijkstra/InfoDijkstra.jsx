import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import dijkstraAnimation from './dijkstraAnimation.gif';
import { useSpring, animated } from 'react-spring';
import dijkstras from './dijkstras.gif'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        lineHeight: '1.5',
        maxWidth: '1000px', // Increase the maxWidth to 1000px
        margin: '0 auto',
      },
    title: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(3),
    },
    section: {
        marginBottom: theme.spacing(4),
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        borderRadius: '4px',
        padding: theme.spacing(2),
    },
    image: {
        maxWidth: '100%', // Set the maximum width to 100%
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        boxShadow:
          '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        borderRadius: '4px',
        width: '100%', // Add a width of 100%
      },
      gridcontainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5% auto',
        marginLeft: '350px',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        backgroundColor: '#f5f5f5',
        maxWidth: '1000px',
      }      
}));


function DijkstraAlgorithmInfo() {
    const classes = useStyles();

    const sectionAnimation = useSpring({
        to: { opacity: 1, transform: 'translateY(0)' },
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { mass: 1, tension: 280, friction: 20 },
    });

    return (
        <div className={classes.gridcontainer}>
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom className={classes.title}>
                        Dijkstra's Algorithm
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6 }>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                                Dijkstra's algorithm is a graph search algorithm that solves the single-source shortest path problem for a graph with non-negative edge weights, producing a shortest path tree. This algorithm is often used in routing and as a subroutine in other graph algorithms.
                            </Typography>
                        </Paper>
                    </animated.div>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                                The algorithm maintains a set of vertices whose shortest distance from the source is known. Initially, only thesource vertex is known. The algorithm repeatedly selects the vertex with the minimum distance from the source and adds it to the set of known vertices. It then updates the distance of its neighbors if it finds a shorter path.
                            </Typography>
                        </Paper>
                    </animated.div>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                                The time complexity of Dijkstra's algorithm is O(E + V log V), where E is the number of edges and V is the number of vertices. The space complexity of the algorithm is O(V).
                            </Typography>
                        </Paper>
                    </animated.div>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                                Dijkstra's algorithm can be used in a variety of applications, such as finding the shortest path between two points in a map, finding the fastest route in a transportation network, and optimizing packet routing in computer networks.
                            </Typography>
                        </Paper>
                    </animated.div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                                Below is an example of the process of Dijkstra's algorithm for finding the shortest path from node A to node F:
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={dijkstraAnimation} alt="Dijkstra's algorithm process" className={classes.image} />
                            </div>
                        </Paper>
                        <Paper className={classes.section}>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={dijkstras} alt="Dijkstra's algorithm process" className={classes.image} />
                            </div>
                        </Paper>
                    </animated.div>
                </Grid>
            </Grid>
        </div>
        </div>
    );
}

export default DijkstraAlgorithmInfo;
