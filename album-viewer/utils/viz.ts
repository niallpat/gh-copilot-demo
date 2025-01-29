import * as d3 from 'd3';

// load the data from a json file and create the d3 svg in the then function
export function createViz() {
  d3.json('data.json').then(data => {
    const svg = d3.select('body').append('svg');
    svg.selectAll('circle').data(data).enter().append('circle');

  // create the scales for the x and y axis
  // x-axis are the month series and y-axis show the numbers of albums sold
  const x = d3.scaleBand().domain(data.map(d => d.month)).range([0, 800]);
  const y = d3.scaleLinear().domain([0, d3.max(data, d => d.albums)]).range([0, 600]);

  //create axes for the x and y axis
  const xAxis = d3.axisBottom(x);
  const yAxis = d3.axisLeft(y);

  // generate a line chart based on the albums sales data
  const line = d3.line()
    .x(d => x(d.month))
    .y(d => y(d.albums));

  });
}
