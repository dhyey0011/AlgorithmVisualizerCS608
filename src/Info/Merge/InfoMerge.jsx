import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useSpring, animated } from 'react-spring';

import mergesort1 from './mergesort.gif';
import mergesort2 from './mergesort2.gif';


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


function MergeAlgorithmInfo() {
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
                        Merge Sort
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6 }>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                            Merge Sort is a sorting algorithm that uses the divide and conquer approach to sort an array or a list of items. It works by dividing the unsorted list into n sub-lists, each containing one element, and then repeatedly merging sub-lists to produce new sorted sub-lists until there is only one sub-list remaining.
                            </Typography>
                        </Paper>
                    </animated.div>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                            Here's an example of how Merge Sort works on the array [38, 27, 43, 3, 9, 82, 10]: <br />

1. Divide the array into two sub-arrays: [38, 27, 43, 3] and [9, 82, 10].<br />
2. Recursively divide each sub-array into smaller sub-arrays until each sub-array contains only one element: [38], [27], [43], [3], [9], [82], [10].<br />
3. Merge the sub-arrays back together in sorted order: [27, 38, 43], [3], [9, 10, 82].<br />
4. Merge the sub-arrays again: [3, 27, 38, 43], [9, 10, 82].<br />
5. Merge the sub-arrays one last time to get the final sorted array: [3, 9, 10, 27, 38, 43, 82].<br />
                            </Typography>
                        </Paper>
                    </animated.div>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                            Merge Sort has a time complexity of O(n log n) in both the average and worst cases. This makes it one of the most efficient sorting algorithms, especially for larger datasets. However, Merge Sort does require additional memory proportional to the size of the input array, which can be a drawback for very large datasets.
                            </Typography>
                        </Paper>
                    </animated.div>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                            Merge Sort is a stable sorting algorithm, meaning that the relative order of equal elements is preserved. This makes it a good choice when sorting objects with multiple keys or attributes.
Overall, Merge Sort is a powerful and efficient sorting algorithm that is widely used in computer science and programming.
                            </Typography>
                        </Paper>
                    </animated.div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={mergesort1} alt="Dijkstra's algorithm process" className={classes.image} />
                            </div>
                        </Paper>
                        <Paper className={classes.section}>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={mergesort2} alt="Dijkstra's algorithm process" className={classes.image} />
                            </div>
                        </Paper>
                    </animated.div>
                </Grid>
            </Grid>
        </div>
        </div>
    );
}

export default MergeAlgorithmInfo;
