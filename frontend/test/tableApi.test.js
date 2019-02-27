import { getPeople } from 'utilities/tableApi.js'
import { expect } from 'chai';

describe('Test table api ', function() {
  before(function() {
  });

  it('getPeople api is returned properly (development)', function() {
    const people = getPeople('development');
    people.then( data => {            
      expect(data.length === 5).equal(true);
    });
  });  
 
});
