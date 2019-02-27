export function fakedFetch(url, method, data, optionalHeaders) {
  
  //console.log('Mockup.js: fakedFetch called', 'url=', url, 'method=', method, 'data=', data);
  // name of mockup js file should follow existing examples
  let mockupMatrix = [
    {regex: /api\/test$/, file:'./test.mock.js'},
    {regex: /data\/people.json$/, file: './test.mock.js', data: require('data/people.json')}
  ];

  for(let row of mockupMatrix) {
    if(row.regex.test(url)) {
      return require(row.file)[method](url, row.data, optionalHeaders);
    }
  }
  // unknown API
  return new Promise();
  
}