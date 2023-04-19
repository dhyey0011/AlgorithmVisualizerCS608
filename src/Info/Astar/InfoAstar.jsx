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


function AstarAlgorithmInfo() {
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
                        A star Algorithm
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

export default AstarAlgorithmInfo;


/*import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    graph: {
        marginTop: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
    },
    vertex: {
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: "#2196f3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
    },
    selectedVertex: {
        backgroundColor: "#f44336",
    },
    edge: {
        position: "absolute",
        width: ({ distance }) => distance,
        height: 3,
        backgroundColor: "#9e9e9e",
        zIndex: -1,
    },
    selectedEdge: {
        backgroundColor: "#f44336",
    },
}));

const Graph = ({ vertices, edges, onSelect }) => {
    const [selected, setSelected] = useState(null);
    const classes = useStyles();

    const handleSelect = (vertex) => {
        if (selected === vertex) {
            setSelected(null);
        } else {
            setSelected(vertex);
            onSelect(vertex);
        }
    };

    return (
        <div className={classes.graph}>
            {edges.map((edge) => (
                <div
                    key={`${edge.from}-${edge.to}`}
                    className={`${classes.edge} ${selected === edge.from || selected === edge.to
                            ? classes.selectedEdge
                            : ""
                        }`}
                    style={{
                        transform: `translate(${edge.x1}px, ${edge.y1}px)`,
                        transformOrigin: "left",
                    }}
                    distance={edge.distance}
                />
            ))}
            {vertices.map((vertex) => (
                <div
                    key={vertex.id}
                    className={`${classes.vertex} ${selected === vertex ? classes.selectedVertex : ""
                        }`}
                    style={{ left: vertex.x, top: vertex.y }}
                    onClick={() => handleSelect(vertex)}
                >
                    {vertex.id}
                </div>
            ))}
        </div>
    );
};

const DijkstraPage = () => {
    const classes = useStyles();

    const [vertices, setVertices] = useState([
        { id: "A", x: 100, y: 100 },
        { id: "B", x: 200, y: 50 },
        { id: "C", x: 200, y: 150 },
        { id: "D", x: 300, y: 100 },
        { id: "E", x: 400, y: 100 },
    ]);
    const [edges, setEdges] = useState([
        { from: "A", to: "B", distance: 100 },
        { from: "A", to: "C", distance: 200 },
        { from: "B", to: "C", distance: 50 },
        { from: "B", to: "D", distance: 250 },
        { from: "C", to: "D", distance: 100 },
        { from: "C", to: "E", distance: 200 },
        { from: "D", to: "E", distance: 150 },
    ]);
    const [startVertex, setStartVertex] = useState(null);
    const [distances, setDistances] = useState({});
    const [previous, setPrevious] = useState({});

    const handleSelect = (vertex) => {
        setStartVertex(vertex);
        const newDistances = {};
        const newPrevious = {};
        vertices.forEach((v) => {
            newDistances[v.id] = Infinity;
            newPrevious[v.id] = null;
        });
        newDistances[vertex.id] = 0;
        setDistances(newDistances);
        setPrevious(newPrevious);
    };

    const dijkstra = () => {
        const unvisited = new Set(vertices.map((v) => v.id));
        const newDistances = { ...distances };
        const newPrevious = { ...previous };
        while (unvisited.size > 0) {
            let current = null;
            unvisited.forEach((vertex) => {
                if (current === null || newDistances[vertex] < newDistances[current]) {
                    current = vertex;
                }
            });
            unvisited.delete(current);
            edges.forEach((edge) => {
                if (edge.from === current) {
                    const distance = newDistances[current] + edge.distance;
                    if (distance < newDistances[edge.to]) {
                        newDistances[edge.to] = distance;
                        newPrevious[edge.to] = current;
                    }
                }
            });
        }
        setDistances(newDistances);
        setPrevious(newPrevious);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Dijkstra's Algorithm
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                            Graph
                        </Typography>
                        <Graph vertices={vertices} edges={edges} onSelect={handleSelect} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                            Start Vertex: {startVertex ? startVertex.id : ""}
                        </Typography>
                        <TextField
                            label="Enter starting vertex"
                            variant="outlined"
                            fullWidth
                            value={startVertex ? startVertex.id : ""}
                            disabled
                        />
                        <Button variant="contained" color="primary" onClick={dijkstra}>
                            Run Dijkstra
                        </Button>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                            Shortest Paths
                        </Typography>
                        <ul>
                            {Object.entries(distances).map(([vertex, distance]) => (
                                <li key={vertex}>
                                    Shortest distance to vertex {vertex}: {distance}
                                </li>
                            ))}
                        </ul>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                            Previous Vertices
                        </Typography>
                        <ul>
                            {Object.entries(previous).map(([vertex, prev]) => (
                                <li key={vertex}>
                                    Previous vertex of {vertex}: {prev}
                                </li>
                            ))}
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default DijkstraPage;*/

