var assert = require('assert'),
    math = require('../../../index.js'),
    approx = require('../../../tools/approx.js'),
    pi = math.pi,
    complex = math.complex,
    matrix = math.matrix,
    unit = math.unit,
    sin = math.sin;

describe('sin', function() {

  it('should return the sine of a number', function() {
    approx.equal(sin(0), 0);
    approx.equal(sin(pi*1/4), 0.707106781186548);
    approx.equal(sin(pi*1/8), 0.382683432365090);
    approx.equal(sin(pi*2/4), 1);
    approx.equal(sin(pi*3/4), 0.707106781186548);
    approx.equal(sin(pi*4/4), 0);
    approx.equal(sin(pi*5/4), -0.707106781186548);
    approx.equal(sin(pi*6/4), -1);
    approx.equal(sin(pi*7/4), -0.707106781186548);
    approx.equal(sin(pi*8/4), 0);
    approx.equal(sin(pi/4), math.sqrt(2)/2);
  });

  it('should return the sine of a complex number', function() {
    var re = 9.15449914691143,
        im = 4.16890695996656;
    approx.deepEqual(sin(complex('2+3i')), complex(re, -im));
    approx.deepEqual(sin(complex('2-3i')), complex(re, im));
    approx.deepEqual(sin(complex('-2+3i')), complex(-re, -im));
    approx.deepEqual(sin(complex('-2-3i')), complex(-re, im));
    approx.deepEqual(sin(complex('i')), complex(0, 1.175201193643801));
    approx.deepEqual(sin(complex('1')), complex(0.841470984807897, 0));
    approx.deepEqual(sin(complex('1+i')), complex(1.298457581415977, 0.634963914784736));
  });

  it('should return the sine of an angle', function() {
    approx.equal(sin(unit('45deg')), 0.707106781186548);
    approx.equal(sin(unit('-45deg')), -0.707106781186548);
  });

  it('should throw an error if called with an invalid unit', function() {
    assert.throws(function () {sin(unit('5 celsius'))});
  });

  it('should throw an error if called with a string', function() {
    assert.throws(function () {sin('string')});
  });

  var sin123 = [0.84147098480789, 0.909297426825682, 0.141120008059867];

  it('should return the sin of each element of an array', function() {
    approx.deepEqual(sin([1,2,3]), sin123);
  });

  it('should return the sin of each element of a matrix', function() {
    approx.deepEqual(sin(matrix([1,2,3])), matrix(sin123));
  });

});
