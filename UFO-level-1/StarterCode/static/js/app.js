// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-group");

// Create event handlers 
button.on("click", runEnter);
form.on("click", runEnter);

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime.form-control");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    //   Here I filtered the data to make sure it matched the date submitted by the user. 
    var filteredData = tableData.filter(request => request.datetime === inputValue);
    // Then, select the unordered list element by class name
    var tbody = d3.select("#ufo-table");
    // append stats to the list
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
