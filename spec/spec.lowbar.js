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
    it('returns the first element in an array with just numbers', () => {
      let actual = _.first([10, 20, 83, 100, 49]);
      let expected = 10;
      expect(actual).to.eql(expected);
    });
    it('returns the first element in an array with numbers and strings', () => {
      let actual = _.first(['first', 10, 20, 83, 100, 49, 'last']);
      let expected = 'first';
      expect(actual).to.eql(expected);
    });
  });

  // LAST
  describe('#last', () => {
    it('is a function', () => {
      expect(_.last).to.be.a('function');
    });
    it('returns the last element in an array with numbers', () => {
      let actual = _.last([10, 20, 83, 100, 49]);
      let expected = 49;
      expect(actual).to.eql(expected);
    });
    it('returns the first element in an array with numbers and strings', () => {
      let actual = _.last(['first', 10, 20, 83, 100, 49, 'last']);
      let expected = 'last';
      expect(actual).to.eql(expected);
    });
  });

  // EACH
  describe('#each', () => {
    let res = [];
    _.each([1, 2, 3], function (n) {
      return res.push(n + 1);
    });
    it('is a function', () => {
      expect(_.each).to.be.a('function');
    });
    it('interate with the test given', () => {
      let actual = res;
      let expected = [2, 3, 4];
      expect(actual).to.eql(expected);
   });
  });

  // INDEXOF
  describe('#indexof', () => {
    it('is a function', () => {
      expect(_.indexOf).to.be.a('function');
    });
    it('returns the index at which the element can be found in the array with only numbers', () => {
      let actual = _.indexOf([100, 293, 12, 1, 204], 12);
      let expected = 2;
      expect(actual).to.eql(expected);
   });
   it('returns the index at which the element can be found in the array with numbers and strings', () => {
     let actual = _.indexOf(['Hello', 100, 293, 12, 'Test', 1, 204], 'Test');
     let expected = 4;
     expect(actual).to.eql(expected);
  });
 });

 // FILTER
 describe('#filter', () => {
   let res = _.filter([10, 22, 31, 52, 43, 64, 93], function (num) {
     if (num % 2 === 0) return num;
   });
   it('is a function', () => {
     expect(_.filter).to.be.a('function');
   });
   it('returns only numbers that are even', () => {
     let actual = res;
     let expected = [10, 22, 52, 64];
     expect(actual).to.eql(expected);
   });
 });

 // REJECT
 describe('#reject', () => {
   let res = _.reject([10, 22, 31, 52, 43, 64, 93], function (num) {
     if (num % 2 === 0) return num;
   });
   it('is a function', () => {
     expect(_.reject).to.be.a('function');
   });
   it('returns only numbers that are odd', function () {
     let actual = res;
     let expected = [31, 43, 93];
     expect(actual).to.eql(expected);
   });
 });
});
