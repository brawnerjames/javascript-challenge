// code for UFO level 2


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



var buttonDate = d3.selectAll('#filter-btn-date');

var inputFieldDate = d3.select("#datetime");

// use '.on' to attach function to action
buttonDate.on("click", function() {
  var inputElement = d3.select("#filter-btn-date");
  var inputValueDate = inputFieldDate.property("value");

  console.log(inputValueDate);
  var filteredDataDate = ufoData;
  filteredDataDate = filteredDataDate.filter(sighting => sighting.datetime === inputValueDate);


  console.log(filteredDataDate)
  dataTable(filteredDataDate)

  

});


var buttonCity = d3.selectAll('#filter-btn-city');

var inputFieldCity = d3.selectAll("#city");

buttonCity.on("click", function() {
  var inputElement = d3.select("#filter-btn-city");
  var inputValueCity = inputFieldCity.property("value");

  console.log(inputValueCity);
  var filteredDataCity = ufoData;
  filteredDataCity = filteredDataCity.filter(sighting => sighting.city === inputValueCity);


  console.log(filteredDataCity)
  dataTable(filteredDataCity)

});


var buttonState = d3.selectAll('#filter-btn-state');

var inputFieldState = d3.selectAll("#state");

buttonState.on("click", function() {
  var inputElement = d3.select("#filter-btn-state");
  var inputValueState = inputFieldState.property("value");

  console.log(inputValueState);
  var filteredDataState = ufoData;
  filteredDataState = filteredDataState.filter(sighting => sighting.state === inputValueState);


  console.log(filteredDataState)
  dataTable(filteredDataState)

});

var buttonCountry = d3.selectAll('#filter-btn-country');

var inputFieldCountry = d3.selectAll("#country");

buttonCountry.on("click", function() {
  var inputElement = d3.select("#filter-btn-country");
  var inputValueCountry = inputFieldCountry.property("value");

  console.log(inputValueCountry);
  var filteredDataCountry = ufoData;
  filteredDataCountry = filteredDataCountry.filter(sighting => sighting.country === inputValueCountry);


  console.log(filteredDataCountry)
  dataTable(filteredDataCountry)

});



var buttonShape = d3.selectAll('#filter-btn-shape');

var inputFieldShape = d3.selectAll("#shape");

buttonShape.on("click", function() {
  var inputElement = d3.select("#filter-btn-shape");
  var inputValueShape = inputFieldShape.property("value");

  console.log(inputValueShape);
  var filteredDataShape = ufoData;
  filteredDataShape = filteredDataShape.filter(sighting => sighting.shape === inputValueShape);


  console.log(filteredDataShape)
  dataTable(filteredDataShape)

});

