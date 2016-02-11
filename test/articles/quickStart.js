
var algebra = require('algebra'),
    should  = require('should')

describe('Quick start', function () {
  it('has a working Complex numbers example', function () {
    var C = algebra.Complex

    var z1 = new C([1, 2])
    var z2 = new C([3, 4])

    z1 = z1.mul(z2)

    z1.data.should.eql([-5, 10])

    z1 = z1.conj().mul([2, 0]);

    z1.data.should.eql([-10, -20])
  })

  it('has a working Vectors example', function () {
    var R = algebra.Real
    var V = algebra.VectorSpace

    var R2 = V(R)(2)

    var v1 = new R2([1, 1])
    var v2 = new R2([2, 4])

    v1 = v1.add(v2)

    v1.data.should.eql([3, 5])
  })

  it('has a working Matrices example', function () {
    var M = algebra.MatrixSpace
    var R = algebra.Real

    var M2 = M(R)(2)

    var m1 = new M2([1, 2,
                     3, 4])

    var m2 = new M2([-1, 0,
                      0, 1])

    m1 = m1.mul(m2)

    m1.data.should.eql([-1, 2,
                        -3, 4])

    m1.determinant.data.should.eql(2)
  })
})