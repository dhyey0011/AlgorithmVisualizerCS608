import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useSpring, animated } from 'react-spring';
import bubblesort1 from './bubbleGif2.gif';
import bubblesort from './bubblegif.gif';


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


function BubbleAlgorithmInfo() {
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
                        Bubble Sort
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6 }>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                            Bubble sort is a basic algorithm for arranging a string of numbers or other elements in the correct order. The method works by examining each set of adjacent elements in the string, from left to right, switching their positions if they are out of order. The algorithm then repeats this process until it can run through the entire string and find no two elements that need to be swapped.
                            </Typography>
                        </Paper>
                    </animated.div>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                            Computer programmers use bubble sort to arrange a sequence of numbers in the correct order. Because it is the simplest type of sorting algorithm, bubble sort does not get used much in real-world computer science. Its most common uses for programmers include the following:
                            </Typography>
                        </Paper>
                    </animated.div>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                                1.Bubble sort works as a method for teaching new programmers how to sort data sets because the algorithm is straightforward to understand and implement.<br/>
                                2.Because it has to repeatedly cycle through the entire set of elements, comparing only two adjacent items at a time, bubble sort is not optimal for more massive datasets. But it can work well when sorting only a small number of elements.<br/>
                                3. Finally, some computer scientists and data analysts use the algorithm as a final check for datasets they believe are already in nearly sorted order.
                            </Typography>
                        </Paper>
                    </animated.div>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                            In the worst-case scenario, when the input array is in reverse order, bubble sort has a time complexity of O(n^2), where n is the number of elements in the array. In the best-case scenario, when the input array is already sorted, bubble sort has a time complexity of O(n). Bubble sort has a space complexity of O(1), which means that it doesn't require any additional memory to sort the input array. However, bubble sort is considered to be an inefficient sorting algorithm for large arrays due to its slow performance.
                            </Typography>
                        </Paper>
                    </animated.div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <animated.div style={sectionAnimation}>
                        <Paper className={classes.section}>
                            <Typography variant="body1" gutterBottom>
                                Below is an example of the Bubble Sort:
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={bubblesort1} alt="Dijkstra's algorithm process" className={classes.image} />
                            </div>
                        </Paper>
                        <Paper className={classes.section}>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={bubblesort} alt="Dijkstra's algorithm process" className={classes.image} />
                            </div>
                        </Paper>
                    </animated.div>
                </Grid>
            </Grid>
        </div>
        </div>
    );
}

export default BubbleAlgorithmInfo;
