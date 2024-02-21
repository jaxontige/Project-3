// Create an array of each country's numbers
let inclAll = Object.values(data.inclAll);
let exclAll = Object.values(data.exclAll);
let inclUtilities = Object.values(data.inclUtilities);
let exclUtilities = Object.values(data.exclUtilities);
let inclAmenities = Object.values(data.inclAmenities);
let exclAmenities = Object.values(data.exclAmenities);

// Check that the right data was pulled
console.log(inclAll);

// Create an array of category labels
let labels = Object.keys(data.inclAll);

console.log(labels);

// Display the default plot


function init() {

    let trace1 = {
        x: labels,
        y: inclAll,
        type: "bar",
        marker: {
            width: 10
        }
    };



    let data = [trace1];

    // Testing this to see if I can make the title of the chart dynamic
    // Get the selected option element
    let dropdownMenu = d3.select("#selDataset");



    let layout = {
        title: `Percent of Properties in Rental Rate Bracket Meeting this Condition`,
        height: 600,
        width: 1500,
        margin: {
            b: 100
        }
    };
    // Create the visualization with Plotly
    Plotly.newPlot("bar", data, layout);
};

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the data
  let data = [];

  if (dataset == 'inclAll') {
    data = inclAll;
  }
  else if (dataset == 'exclAll') {
    data = exclAll;
  }
  else if (dataset == 'inclUtilities') {
    data = inclUtilities;
  }
  else if (dataset == 'exclUtilities') {
    data = exclUtilities;
  }
  else if (dataset == 'inclAmenities') {
    data = inclAmenities;
  }
  else if (dataset == 'exclAmenities') {
    data = exclAmenities;
  }
// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("bar", "y", [newdata]);
}

init();
