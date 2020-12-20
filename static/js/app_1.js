// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    }
  );
});
}
function filterdTable() {
  
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
      };
      if (city) {
        filteredData = filteredData.filter(row => row.city  === city);
      };
      if (state) {
        filteredData = filteredData.filter(row => row.state  === state);
      };
      if (country) {
        filteredData = filteredData.filter(row => row.country  === country);
      };
      if (shape) {
        filteredData = filteredData.filter(row => row.shape  === shape);
      };
  //  Rebuild the table using the fif iltered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
  
}
d3.selectAll("#datetime").on("keydown", filterdTable); 


  

d3.selectAll("#city").on("keydown", filterdTable);
d3.selectAll("#state").on("keydown", filterdTable);
d3.selectAll("#country").on("keydown", filterdTable);
d3.selectAll("#shape").on("keydown", filterdTable); 

buildTable(tableData);
// 1. Create a variable to keep track of all the filters as an object.

// 3. Use this function to update the filters. 
//function updateFilters() {

    // 4a. Save the element that was changed as a variable.

    // 4b. Save the value that was changed as a variable.

    // 4c. Save the id of the filter that was changed as a variable.

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
    
  
  // 7. Use this function to filter the table when data is entered.
  //function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  
  
  // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
  //buildTable(tableData);
