var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-nth');

describe('next/nth', function () {

  it('nx.nth', function () {
    var array = ['a', 'b', 'c', 'd'];
    var rs1 = nx.nth(array, 1);
    var rs2 = nx.nth(array, -2);

    assert.equal(rs1, 'b');
    assert.equal(rs2, 'c');
  });

});
