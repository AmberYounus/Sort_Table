//create a function to sort the table in order of alphabetically
function sortTable() {
  var i, x, y, sort, rows, switching, shouldSwitch;
  sort = document.getElementById("sort");
  switching = true;

  while (switching) {
    switching = false;
    rows = sort.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i+1].getElementsByTagName("td")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

