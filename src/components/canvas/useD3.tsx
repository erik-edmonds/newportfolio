import * as d3 from 'd3';

const margin = {top: 30, right: 20, bottom: 50, left: 50},
  width = 0.95*window.innerWidth - margin.left - margin.right,
  height = 0.9*window.innerHeight - margin.top - margin.bottom;

//Globals:
const currentSearch = "";
const searchTerms = "";
const selection = "county";
const year;
const cache = {};

const urls = {
  'county': 'data/county_2020.csv',
  'state': 'data/state_2020.csv',
  'demographic': 'data/US_Demographic_Presidential_Results_04-16.csv'
}

const pctFormat = d3.format(".2%");
const thsdFormat = d3.format(",");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const svg = d3.select("body").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const title = svg.append("text")
  .attr("class", "title")
  .attr("dy", height-10)
  .attr("dx", ".35em");

const demtext = svg.append("text")
  .attr("class", "party")
  .attr("dy", height-50)
  .attr("dx", 243);

const reptext = svg.append("text")
  .attr("class", "party")
  .attr("dy", height-14)
  .attr("dx", 243);

//Define static scales
const xScale = d3.scaleLinear()
  .domain([-100, 100])
  .range([0, width]);

const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);

const colorScale = d3.scaleLinear()
  .domain([-80, 0, 80])
  .range(['#EF3B2C', '#885ead', '#08519C'])
  .interpolate(d3.interpolateRgb);

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis)
  .append("text")
  .attr("y", "3em")
  .attr("x", width/2)
  .text("Democratic Margin (%)");

svg.append("g")
  .attr("class", "axis")
  .call(yAxis)
  .attr("transform", "translate(" + (width/2) + ",0)")
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", "-3.75em")
  .style("text-anchor", "end")
  .text("Turnout (%VAP)");

const tooltip = d3.select("#formholder")
  .append("div")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .attr("class", "tooltip");

d3.select('#inds').on("change", function () {
  const sel = document.getElementById("inds");
  selection = sel.options[sel.selectedIndex].value;

  switch (selection) {
    case 'county':
      renderCounties();
      break;
    case 'state':
      renderStates();
      break;
    case 'race':
      renderDemographic('race');
      break;
    case 'gender':
      renderDemographic('gender');
      break;
    case 'age':
      renderDemographic('age');
      break;
    case 'education':
      renderDemographic('education');
      break;
  }
});


function getYearData(dataset, year) {
  for (const i=0; i<dataset.length; i++) {
    if (Number(dataset[i].key) === year) {
      return dataset[i].values;
    }
  }
}

function copyObj(original) {
  return JSON.parse(JSON.stringify(original));
}

function reset() {
  document.getElementById("myVal").value= '';
  handleClick();
}

function handleClick(event){
  currentSearch = document.getElementById("myVal").value;

  const words = currentSearch.split(",").map(function(s) { return s.trim() });
  searchTerms = RegExp(words.join('|'), "g");

  d3.selectAll("circle").each(function(d) {
    const circle = d3.select(this);

    switch (selection) {
      case 'county':
        const field = d.county;
        const count = d.county_num;
        break;
      case 'state':
        const field = d.state;
        const count = d.num_state;
        break;
      case 'race':
      case 'gender':
      case 'age':
      case 'education':
        const field = d.group;
        const count = d.num_group;
        break;
    }

    if ( (field.search(searchTerms) != -1) || (currentSearch == "") ) {
      circle.style('pointer-events', 'auto');
      circle.attr("fill", colorScale(((d.num_dem-d.num_rep)/count)*100));
      circle.style("stroke-opacity", 1);
    } else {
      circle.style('pointer-events', 'none');
      circle.attr("fill", "rgba(192,192,192,0.05)");
      circle.style("stroke-opacity", 0);
    }

  });

  return false;
}


function renderCounties() {

  if (cache.counties) {
    build(cache.counties);
  } else {
    d3.csv(urls.county, parseRows, function(error, data) {
      if (error) {throw error};
      //Update cache:
      cache.counties = data;
      build(data);
    });
  }

  function parseRows(d) {
    return {'county': d.county_name + ', ' + d.state, 'state': d.state, 'county_num': +d.county_num, 'turnout': +d.turnout,
      'num_rep': +d.rep_num, 'num_dem': +d.dem_num, 'year': +d.year, 'state_electoral_votes': +d.state_electoral_votes,
      'vap': +d.vap, 'id': d.fips_code, 'dem_margin': +d.dem_margin*100};
  }

  function tooltipOn(d) {
    tooltip.style("visibility", "visible")
      .html(
        d.county + "<br>" +
        "County: D: " + pctFormat(d.num_dem/d.county_num) +
        " R: " + pctFormat(d.num_rep/d.county_num) + "<br>" +
        "Turnout: " + pctFormat(d.turnout) + "<br>" +
        "Voters: " + thsdFormat(Math.round(d.county_num)) + "<br>" +
        "State: D: " + pctFormat(d.num_state_dem/d.num_state) +
        " R: " + pctFormat(d.num_state_rep/d.num_state) +  "<br>" );
  }


  function build(data) {
    const stateData = d3.nest()
      .key(function(d) { return d.year; })
      .key(function(d) { return d.state; })
      .rollup(function(v) { return {
        'num_state': d3.sum(v, function(d) { return d.county_num; }),
        'num_state_dem': d3.sum(v, function(d) { return d.num_dem; }),
        'num_state_rep': d3.sum(v, function(d) { return d.num_rep; }),
      }; })
      .object(data);

    data.forEach(function(d) {
      d.num_state = stateData[d.year][d.state]['num_state'],
        d.num_state_dem = stateData[d.year][d.state]['num_state_dem'],
        d.num_state_rep = stateData[d.year][d.state]['num_state_rep']
    });

    const dataset = d3.nest()
      .key(function(d) { return +d.year; })
      .sortValues(function(a,b) { return b.county_num - a.county_num; } )
      .object(data);


    const years = Object.keys(dataset).map(Number);
    years.sort()
    year = year ? year : years[0];

    const yearData = copyObj(dataset[String(year)]);

    const rScale = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) {return Math.sqrt(d.county_num/Math.PI); })])
      .range([1, 35]);

    const rScale_electoral = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) {
        return Math.sqrt((d.county_num/d.num_state)*d.state_electoral_votes/Math.PI);
      })])
      .range([1, 35]);

    const rScale_vpi = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) {
        const county_vpi = (d.county_num/d.num_state) * (d.state_electoral_votes/(Math.abs(d.num_state_dem-d.num_state_rep)));
        return Math.sqrt(county_vpi/Math.PI);
      })])
      .range([1, 35]);

    function upclick() {
      year += 4;
      if (year > years[years.length - 1]) {
        year = years[0]
      }
      getYearData(dataset, year);
      yearData = copyObj(dataset[String(year)]);
      update(yearData, year);
    }

    function downclick() {
      year -= 4;
      if (year < years[0]) {
        year = years[years.length - 1];
      }

      yearData = copyObj(dataset[String(year)]);
      update(yearData, year);
    }

    d3.select('#upclick').on("click", upclick);
    d3.select('#downclick').on("click", downclick);


    function getRadioScaled(d) {

      const checked = document.querySelector('input[name="area"]:checked').value;

      if (checked === "electoral") {
        return rScale_electoral(Math.sqrt((d.county_num/d.num_state)*d.state_electoral_votes/Math.PI));
      } else if (checked === "vpi") {
        const county_vpi = (d.county_num/d.num_state) * (d.state_electoral_votes/(Math.abs(d.num_state_dem-d.num_state_rep)));
        return rScale_vpi(Math.sqrt(county_vpi/Math.PI));

      } else {
        return rScale(Math.sqrt(d.county_num/Math.PI));
      }

    }

    function updateAreas(event){

      d3.selectAll("circle").transition()
        .duration(1000)
        .attr("r", function(d) {
          return getRadioScaled(d);
        });

    }

    d3.select("#areaform")
      .on("click", function () {
        return updateAreas();
      });

    const drag = d3.drag()
      .on("drag", dragged)
      .on("end", ended);


    function dragged(d) {
      d3.selectAll("circle").transition();
      if (d3.event.y >= height) {
        return;
      }

      d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);

      if (d.x === undefined || d.y === undefined) {
        return;
      }


      const newMargin = xScale.invert(d.x)/100,
        newTurnout = yScale.invert(d.y)/100,
        oldTurnout = d.turnout,
        oldMargin = (d.num_dem-d.num_rep)/d.county_num,
        marginChange = newMargin-oldMargin,
        oldDfrac = d.num_dem/d.county_num,
        oldRfrac = d.num_rep/d.county_num,
        oldNumDem = d.num_dem,
        oldNumRep = d.num_rep;

      dfrac = oldDfrac + marginChange/2;
      rfrac = oldRfrac - marginChange/2;

      d.county_num = newTurnout*d.vap;

      d.num_dem = dfrac*d.county_num;
      d.num_rep = rfrac*d.county_num;
      d.turnout =  newTurnout;

      d.num_state += (newTurnout - oldTurnout)*d.vap
      d.num_state_dem += d.num_dem - oldNumDem;
      d.num_state_rep += d.num_rep - oldNumRep;

      tooltipOn(d);

      for (const i = 0; i<yearData.length; i++) {
        if (yearData[i].state === d.state) {
          yearData[i].num_state = d.num_state;
          yearData[i].num_state_dem = d.num_state_dem;
          yearData[i].num_state_rep = d.num_state_rep;
        }
      }

      updateScore(yearData);
    }

    function ended(d) {
      for (const i = 0; i<yearData.length; i++) {
        if (yearData[i].state === d.state) {
          yearData[i].num_state = d.num_state;
          yearData[i].num_state_dem = d.num_state_dem;
          yearData[i].num_state_rep = d.num_state_rep;
        }
      }
      update(yearData, d.year);

    }

    function updateScore(yearData) {
      const sums = [0,0,0];
      const electoral_sums = [[],0,0];


      for (const i=0; i<yearData.length; i++) {
        sums[0] += yearData[i].num_dem;
        sums[1] += yearData[i].num_rep;
        sums[2] += yearData[i].county_num;
      }

      const states = [];

      const stateYearData = yearData.filter( function(current) {
        if (states.indexOf(current.state) === -1) {
          states.push(current.state);
          return true;
        }
        return false;
      });


      for (const i = 0; i<stateYearData.length; i++) {

        const stateName = stateYearData[i].state;
        const currentYear = stateYearData[i].year;

        if (currentYear === 2016 && ['ME','NE'].indexOf(stateName) !== -1) {
          electoral_sums[1] += 1.5;
          electoral_sums[2] += 3;
        } else if (currentYear === 2008 && stateName === 'NE' ) {
          electoral_sums[1] += 1;
          electoral_sums[2] += 4;

        } else if (stateYearData[i].num_state_dem > stateYearData[i].num_state_rep ) {
          electoral_sums[1] += stateYearData[i].state_electoral_votes;
        } else {
          electoral_sums[2] += stateYearData[i].state_electoral_votes;
        }

      }


      const dfrac = sums[0]/sums[2],
        rfrac = sums[1]/sums[2];

      demtext.text('D ' + pctFormat(dfrac) + ' ' + electoral_sums[1])
      reptext.text('R ' + pctFormat(rfrac) + ' ' + electoral_sums[2])


      if (electoral_sums[1] > electoral_sums[2]) {
        demtext.style('fill', '#bbb');
        reptext.style('fill', null);
      } else {
        demtext.style('fill', null);
        reptext.style('fill', '#bbb');
      }
    }

    function update(yearData, year) {
      updateScore(yearData);
      title.text(year);

      const circles = svg.selectAll("circle")
        .data(yearData, function(d) { return d.id ; });

      circles.exit().remove();

      circles.enter().append("circle")
        .on("mouseover", tooltipOn)
        .on("mouseout", function(d){return tooltip.style("visibility", "hidden");})
        .call(drag)
        .attr("class", "circle")
        .merge(circles)
        .transition()
        .duration(1000)
        .attr("cx", function(d) {
          return xScale(((d.num_dem-d.num_rep)/d.county_num)*100);
        })
        .attr("cy", function(d) {
          return yScale(d.turnout*100);
        })
        .attr("r", function(d) {
          return getRadioScaled(d);
        })
        .attr("fill",function(d){
          if (d.county.search(searchTerms) != -1) {
            return colorScale(((d.num_dem-d.num_rep)/d.county_num)*100);
          }else {
            return "rgba(192,192,192,0.05)";
          }
        });


    }

    function initialize(yearData, year) {
      updateScore(yearData);
      title.text(year);

      const circles = svg.selectAll("circle")
        .data(yearData, function(d) { return d.id ; });

      circles.exit().remove();
      circles.enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d) {
          return xScale(((d.num_dem-d.num_rep)/d.county_num)*100);
        })
        .attr("cy", function(d) {
          return yScale(d.turnout*100);
        })
        .attr("r", function(d) {
          return getRadioScaled(d);
        })
        .attr("fill",function(d){
          if (d.county.search(searchTerms) != -1) {
            return colorScale(((d.num_dem-d.num_rep)/d.county_num)*100);
          }else {
            return "rgba(192,192,192,0.05)";
          }
        })
        .call(drag)
        .on("mouseover", tooltipOn)
        .on("mouseout", function(d){return tooltip.style("visibility", "hidden");});

    }

    initialize(yearData, year);
  }
}


function renderStates() {

  if (cache.states) {
    build(cache.states);
  } else {
    d3.csv(urls.state, parseRows, function(error, data) {
      if (error) {throw error};
      cache.states = data;
      build(data);
    });
  }


  function tooltipOn(d) {
    tooltip.style("visibility", "visible")
      .html(
        "State: " + d.state + "<br>" +
        " D: " + pctFormat(d.num_dem/d.num_state) +
        " R: " + pctFormat(d.num_rep/d.num_state) + "<br>" +
        "Turnout: " + pctFormat(d.turnout) + "<br>" +
        "Voters: " + thsdFormat(Math.round(d.num_state)) + "<br>")
  }


  function parseRows(d) {
    return {'state': d.state, 'id': d.state, 'num_state': +d.state_num, 'turnout': +d.state_num/+d.vap,
      'num_rep': +d.rep_num, 'num_dem': +d.dem_num, 'year': +d.year, 'state_electoral_votes': +d.state_electoral_votes,
      'vap': +d.vap, 'dem_margin': (+d.dem_num - +d.rep_num) / +d.state_num};
  }


  function build(data) {

    const dataset = d3.nest()
      .key(function(d) { return +d.year; })
      .sortValues(function(a,b) { return b.num_state - a.num_state; } )
      .object(data);


    const years = Object.keys(dataset).map(Number);
    years.sort()
    year = year ? year : years[0];

    const yearData = copyObj(dataset[String(year)]);

    const rScale = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) {return Math.sqrt(d.num_state/Math.PI); })])
      .range([1, 35]);

    const rScale_electoral = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) {
        return Math.sqrt(d.state_electoral_votes/Math.PI);
      })])
      .range([1, 35]);

    const rScale_vpi = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) {
        const county_vpi = d.state_electoral_votes/(Math.abs(d.num_dem-d.num_rep));
        return Math.sqrt(county_vpi/Math.PI);
      })])
      .range([1, 35]);

    function upclick() {
      year += 4;
      if (year > years[years.length - 1]) {
        year = years[0]
      }

      getYearData(dataset, year);
      yearData = copyObj(dataset[String(year)]);
      update(yearData, year);
    }

    function downclick() {
      year -= 4;
      if (year < years[0]) {
        year = years[years.length - 1];
      }
      yearData = copyObj(dataset[String(year)]);
      update(yearData, year);
    }

    d3.select('#upclick').on("click", upclick);
    d3.select('#downclick').on("click", downclick);

    function getRadioScaled(d) {

      const checked = document.querySelector('input[name="area"]:checked').value;

      if (checked === "electoral") {
        return rScale_electoral(Math.sqrt(d.state_electoral_votes/Math.PI));
      } else if (checked === "vpi") {
        const county_vpi = d.state_electoral_votes/(Math.abs(d.num_dem-d.num_rep));
        return rScale_vpi(Math.sqrt(county_vpi/Math.PI));

      } else {
        return rScale(Math.sqrt(d.num_state/Math.PI));
      }

    }

    function updateAreas(event){

      d3.selectAll("circle").transition()
        .duration(1000)
        .attr("r", function(d) {
          return getRadioScaled(d);
        });

    }

    d3.select("#areaform")
      .on("click", function () {
        return updateAreas();
      });

    const drag = d3.drag()
      .on("drag", dragged)
      .on("end", ended);


    function dragged(d) {
      d3.selectAll("circle").transition();
      if (d3.event.y >= height) {
        return;
      }

      d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);

      if (d.x === undefined || d.y === undefined) {
        return;
      }


      const newMargin = xScale.invert(d.x)/100,
        newTurnout = yScale.invert(d.y)/100,
        oldTurnout = d.turnout,
        oldMargin = (d.num_dem-d.num_rep)/d.num_state,
        marginChange = newMargin-oldMargin,
        oldDfrac = d.num_dem/d.num_state,
        oldRfrac = d.num_rep/d.num_state,
        oldNumDem = d.num_dem,
        oldNumRep = d.num_rep;

      dfrac = oldDfrac + marginChange/2;
      rfrac = oldRfrac - marginChange/2;


      d.num_state = newTurnout*d.vap;

      d.num_dem = dfrac*d.num_state;
      d.num_rep = rfrac*d.num_state;
      d.turnout =  newTurnout;


      tooltipOn(d);

      updateScore(yearData);
    }

    function ended(d) {
      for (const i = 0; i<yearData.length; i++) {
        if (yearData[i].state === d.state) {
          yearData[i].num_state = d.num_state;
        }
      }
      update(yearData, d.year);


    }

    function updateScore(yearData) {
      const sums = [0,0,0];
      const electoral_sums = [[],0,0];


      for (const i=0; i<yearData.length; i++) {
        sums[0] += yearData[i].num_dem;
        sums[1] += yearData[i].num_rep;
        sums[2] += yearData[i].num_state;
      }


      for (const i = 0; i<yearData.length; i++) {

        const stateName = yearData[i].state;
        const currentYear = yearData[i].year;

        if (currentYear === 2016 && ['ME','NE'].indexOf(stateName) !== -1) {
          electoral_sums[1] += 1.5;
          electoral_sums[2] += 3;
        } else if (currentYear === 2008 && stateName === 'NE' ) {
          electoral_sums[1] += 1;
          electoral_sums[2] += 4;

        } else if (yearData[i].num_dem > yearData[i].num_rep ) {
          electoral_sums[1] += yearData[i].state_electoral_votes;
        } else {
          electoral_sums[2] += yearData[i].state_electoral_votes;
        }

      }


      const dfrac = sums[0]/sums[2],
        rfrac = sums[1]/sums[2];

      demtext.text('D ' + pctFormat(dfrac) + ' ' + electoral_sums[1])
      reptext.text('R ' + pctFormat(rfrac) + ' ' + electoral_sums[2])


      if (electoral_sums[1] > electoral_sums[2]) {
        demtext.style('fill', '#bbb');
        reptext.style('fill', null);
      } else {
        demtext.style('fill', null);
        reptext.style('fill', '#bbb');
      }
    }

    function update(yearData, year) {
      updateScore(yearData);
      title.text(year);

      const circles = svg.selectAll("circle")
        .data(yearData, function(d) { return d.id ; });

      circles.exit().remove();

      circles.enter().append("circle")
        .on("mouseover", tooltipOn)
        .on("mouseout", function(d){return tooltip.style("visibility", "hidden");})
        .call(drag)
        .attr("class", "circle")
        .merge(circles)
        .transition()
        .duration(1000)
        .attr("cx", function(d) {
          return xScale(((d.num_dem-d.num_rep)/d.num_state)*100);
        })
        .attr("cy", function(d) {
          return yScale(d.turnout*100);
        })
        .attr("r", function(d) {
          return getRadioScaled(d);
        })
        .attr("fill",function(d){
          if (d.state.search(searchTerms) != -1) {
            return colorScale(((d.num_dem-d.num_rep)/d.num_state)*100);
          }else {
            return "rgba(192,192,192,0.05)";
          }
        });


    }

    function initialize(yearData, year) {
      updateScore(yearData);

      title.text(year);

      const circles = svg.selectAll("circle")
        .data(yearData, function(d) { return d.id ; });

      circles.exit().remove();

      circles.enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d) {
          return xScale(((d.num_dem-d.num_rep)/d.num_state)*100);
        })
        .attr("cy", function(d) {
          return yScale(d.turnout*100);
        })
        .attr("r", function(d) {
          return getRadioScaled(d);
        })
        .attr("fill",function(d){
          if (d.state.search(searchTerms) != -1) {
            return colorScale(((d.num_dem-d.num_rep)/d.num_state)*100);
          }else {
            return "rgba(192,192,192,0.05)";
          }
        })
        .call(drag)
        .on("mouseover", tooltipOn)
        .on("mouseout", function(d){return tooltip.style("visibility", "hidden");});
    }

    initialize(yearData, year);
  }
}


function renderDemographic(group) {
  if (cache.demographics) {
    build(cache.demographics);
  } else {
    d3.csv(urls.demographic, parseRows, function(error, data) {
      if (error) {throw error};
      cache.demographics = data;
      build(data);
    });
  }


  function tooltipOn(d) {
    tooltip.style("visibility", "visible")
      .html(
        "Group: " + capitalize(d.group) + "<br>" +
        " D: " + pctFormat(d.num_dem/d.num_group) +
        " R: " + pctFormat(d.num_rep/d.num_group) + "<br>" +
        "Turnout: " + pctFormat(d.turnout) + "<br>" +
        "Voters: " + thsdFormat(Math.round(d.num_group)) + "<br>")
  }


  function parseRows(d) {
    return {'group': d.group, 'id': d.group, 'num_group': +d.electorate_frac*+d.num_nation, 'turnout': +d.turnout,
      'num_rep': +d.rep_frac*+d.electorate_frac*+d.num_nation,
      'num_dem': +d.dem_frac*+d.electorate_frac*+d.num_nation, 'year': +d.year,
      'vap': +d.electorate_frac*+d.num_nation/+d.turnout, 'dem_margin': +d.dem_margin,
      'demographic':d.demographic};
  }


  function build(data){


    const nested = d3.nest()
      .key(function(d) { return d.demographic; })
      .key(function(d) { return +d.year; })
      .sortValues(function(a,b) { return b.num_group - a.num_group; } )
      .object(data);

    const dataset = nested[group];


    const years = Object.keys(dataset).map(Number);
    years.sort()
    year = year ? year : years[0];

    const yearData = copyObj(dataset[String(year)]);
    const rScale = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) {return Math.sqrt(d.num_group/Math.PI); })])
      .range([1, 35]);

    function upclick() {
      year += 4;
      if (year > years[years.length - 1]) {
        year = years[0]
      }
      getYearData(dataset, year);
      yearData = copyObj(dataset[String(year)]);
      update(yearData, year);
    }

    function downclick() {
      year -= 4;
      if (year < years[0]) {
        year = years[years.length - 1];
      }
      yearData = copyObj(dataset[String(year)]);
      update(yearData, year);
    }

    d3.select('#upclick').on("click", upclick);
    d3.select('#downclick').on("click", downclick);

    function getRadioScaled(d) {

      return rScale(Math.sqrt(d.num_group/Math.PI));

    }

    function updateAreas(event){

      d3.selectAll("circle").transition()
        .duration(1000)
        .attr("r", function(d) {
          return getRadioScaled(d);
        });

    }

    d3.select("#areaform")
      .on("click", function () {
        return updateAreas();
      });

    const drag = d3.drag()
      .on("drag", dragged)
      .on("end", ended);


    function dragged(d) {
      d3.selectAll("circle").transition();
      if (d3.event.y >= height) {
        return;
      }

      d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);

      if (d.x === undefined || d.y === undefined) {
        return;
      }


      const newMargin = xScale.invert(d.x)/100,
        newTurnout = yScale.invert(d.y)/100,
        oldTurnout = d.turnout,
        oldMargin = (d.num_dem-d.num_rep)/d.num_group,
        marginChange = newMargin-oldMargin,
        oldDfrac = d.num_dem/d.num_group,
        oldRfrac = d.num_rep/d.num_group,
        oldNumDem = d.num_dem,
        oldNumRep = d.num_rep;

      dfrac = oldDfrac + marginChange/2;
      rfrac = oldRfrac - marginChange/2;

      //Add increses in turnout to num_group
      d.num_group = newTurnout*d.vap;

      d.num_dem = dfrac*d.num_group;
      d.num_rep = rfrac*d.num_group;
      d.turnout =  newTurnout;

      tooltipOn(d);

      updateScore(yearData);
    }

    function ended(d) {

      update(yearData, d.year);

    }

    function updateScore(yearData) {
      const sums = [0,0,0];
      const electoral_sums = [[],0,0];


      for (const i=0; i<yearData.length; i++) {
        sums[0] += yearData[i].num_dem;
        sums[1] += yearData[i].num_rep;
        sums[2] += yearData[i].num_group;
      }


      const dfrac = sums[0]/sums[2],
        rfrac = sums[1]/sums[2];

      demtext.text('D ' + pctFormat(dfrac))
      reptext.text('R ' + pctFormat(rfrac))

    }

    function update(yearData, year) {

      //Change D,R scores:
      updateScore(yearData);

      //Update title
      title.text(year);

      const circles = svg.selectAll("circle")
        .data(yearData, function(d) { return d.id ; });

      circles.exit().remove();

      circles.enter().append("circle")
        .on("mouseover", tooltipOn)
        .on("mouseout", function(d){return tooltip.style("visibility", "hidden");})
        .call(drag)
        .attr("class", "circle")
        .merge(circles)
        .transition()
        .duration(1000)
        .attr("cx", function(d) {
          return xScale(((d.num_dem-d.num_rep)/d.num_group)*100);
        })
        .attr("cy", function(d) {
          return yScale(d.turnout*100);
        })
        .attr("r", function(d) {
          return getRadioScaled(d);
        })
        .attr("fill",function(d){
          if (d.group.search(searchTerms) != -1) {
            return colorScale(((d.num_dem-d.num_rep)/d.num_group)*100);
          }else {
            return "rgba(192,192,192,0.05)";
          }
        });


    }

    function initialize(yearData, year) {
      updateScore(yearData);

      title.text(year);

      const circles = svg.selectAll("circle")
        .data(yearData, function(d) { return d.id ; });

      circles.exit().remove();
      circles.enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d) {
          return xScale(((d.num_dem-d.num_rep)/d.num_group)*100);
        })
        .attr("cy", function(d) {
          return yScale(d.turnout*100);
        })
        .attr("r", function(d) {
          return getRadioScaled(d);
        })
        .attr("fill",function(d){
          if (d.group.search(searchTerms) != -1) {
            return colorScale(((d.num_dem-d.num_rep)/d.num_group)*100);
          }else {
            return "rgba(192,192,192,0.05)";
          }
        })
        .call(drag)
        .on("mouseover", tooltipOn)
        .on("mouseout", function(d){return tooltip.style("visibility", "hidden");});
    }
    initialize(yearData, year);
  }
}



renderCounties();
