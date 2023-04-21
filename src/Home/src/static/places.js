const places = [
  {
    title: 'A * algorithm',
    description:
      "A *Algorithm: A searching algorithm that is used to find the shortest path between an initial and a final point",
    imageUrl:'https://i.gifer.com/8EI2.gif',
    time: 1500,
  },
  {
    title: 'Dijikstras Algorithm',
    description:
      'Dijkstras algorithm is used to find the shortest path between the two mentioned vertices of a graph (Greedy algorithm based)',
    imageUrl: process.env.PUBLIC_URL + '/assets/island2.jpg',
    time: 1500,
  },
  {
    title: 'Merge Sort',
    description:
      'Sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, & then merging.',
    imageUrl: 'https://assets.digitalocean.com/articles/alligator/js/quick-sort/quick-sort-animation.gif',
    time: 1500,
  },
  {
    title: 'Bubble Sort',
    description:
      'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.',
    imageUrl:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230412173040/Bubble-sort.gif',
    time: 1500,
  },
];

export default places;
