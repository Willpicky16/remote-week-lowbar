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

  // FIRST
  describe('#first', () => {
    it('is a function', () => {
      expect(_.first).to.be.a('function');
    });
    it('returns the first element in an array', () => {
      let actual = _.first([10, 20, 83, 100, 49]);
      let expected = 10;
      expect(actual).to.eql(expected);
    });
  });

  // LAST
  describe('#last', () => {
    it('is a function', () => {
      expect(_.last).to.be.a('function');
    });
    it('returns the last element in an array', () => {
      let actual = _.last([10, 20, 83, 100, 49]);
      let expected = 49;
      expect(actual).to.eql(expected);
    });
  });
});
