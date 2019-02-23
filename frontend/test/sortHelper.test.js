import { expect } from 'chai';
import sortHelper from 'utilities/sortHelper';

describe('Test Sorting', function() {
  const rows = [
    {id: 5, name: "abraham", city: "darwin", score: 500},
    {id: 1, name: "tim", city: "sydney", score: 100},
    {id: 3, name: "joe",  city: "sydney", score: 300},
  ];

  before(function() {
  });

  it('MyTable is rendered properly', function() {
    const result = sortHelper(rows, 'name');
    expect(result.map(x => x.id)).to.eql([5,3,1]);
  });

  it('MyTable is rendered properly', function() {
    const result = sortHelper(rows, "-city", "name");
    expect(result.map(x => x.id)).to.eql([3,1,5]);
  });
});
