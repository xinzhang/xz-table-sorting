function dynamicSort(property) {
  var sortOrder = 1;
  if(property === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

export default function sorter(rows, columnName) {
  console.log(columnName);
  rows.sort(dynamicSort(columnName));
  return rows;
}
