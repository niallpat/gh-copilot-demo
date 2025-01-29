import * as d3 from 'd3';

<<<<<<< HEAD
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
=======
interface Datum {
    value: number;
    }
// load the data from a json file and create the d3 svg in the then function
function createViz() {
    d3.json<Datum[]>('data.json').then(data => {
      if (!data) {
        console.error('Failed to load data');
        return;
      }

      // create the svg
        const svg = d3.select('body').append('svg');
        svg.attr('width', 800);
        svg.attr('height', 600);

        // create the scales for the x and y axis
        // x-axis are the month series and y-axis show the numbers of album selled
        const x = d3.scaleBand()
          .domain(data.map((d, i) => i.toString()))
          .range([0, 800])
          .padding(0.1);
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value) || 0])
            .range([600, 0]);

        // create axes for the x and y axis
        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);

        // generate a line chart based on the albums sales data
        svg.append('g')
            .attr('transform', 'translate(0, 600)')
            .call(xAxis);
        svg.append('g')
            .call(yAxis);
            
    });
  }









>>>>>>> eb2e51b0b31e1f49b16b6061761c31066ea18d17
