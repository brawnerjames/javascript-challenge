var tbody = d3.select('tbody');

var ufoData = data;

// create function for searching dates
function dataTable(data) {
  tbody.html('');
  data.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append('tr');
  
    Object.entries(sightings).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append('td');
      cell.text(value);
    });
  });
  
  console.log('You have begun your search for the truth!');
};

dataTable(ufoData);



var button = d3.selectAll('#filter-btn');

var inputField = d3.select("#datetime");

// use '.on' to attach function to action
button.on("click", function() {
  var inputElement = d3.select("#filter-btn");
  var inputValue = inputField.property("value");

  console.log(inputValue);
  var filteredData = ufoData;
  filteredData = filteredData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData)
  dataTable(filteredData)

});

