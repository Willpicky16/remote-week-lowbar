const path = require('path');
const expect = require('chai').expect;
const _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', () => {
  'use strict';

  it('is an object', () => {
    expect(_).to.be.an('object');
  });

  // INDENTITY
  describe('#identity', () => {
    it('is a function', () => {
      expect(_.identity).to.be.a('function');
    });
    it('returns the arguments or 0', () => {
      let actual = _.identity([12, 34, 21, 356]);
      let expected = [12, 34, 21, 356];
      expect(actual).to.eql(expected);
    });
  });
});
