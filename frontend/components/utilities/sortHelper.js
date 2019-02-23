function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

export default function sorter(rows, columnName) {
  console.log('before sort', rows, columnName);
  rows.sort(dynamicSort(columnName));
  console.log('after sort',rows);
  return rows;
}
