
var assert = require('assert');

var algebra = require('../index.js');

describe('Quick start:', function () {
  it('has a working Complex numbers example', function () {
    var Complex = algebra.Complex.Element;

    var z1 = new Complex(1, 2);
    var z2 = new Complex(3, 4);

    z1.mul(z2);

    assert.deepEqual(z1.xy(), [-5, 10]);
  });

  it('has a working Vectors example', function () {
    var Rn = algebra.Real.VectorSpace;
    var R2 = new Rn(2);

    var v1 = new R2.Vector(1, 1);
    var v2 = new R2.Vector(2, 4);

    v1.add(v2);

    assert.deepEqual(v1.getCoordinates(), [3, 5]);
  });

  it('has a working Matrices example', function () {
    var GLnR = algebra.Real.GeneralLinearGroup;
    var GL2R = new GLnR(2);

    var m1 = new GL2R.Matrix(1, 2, 3, 4);

    //m1.mul(m2);

    //console.log(m1.toString());
  });
});
