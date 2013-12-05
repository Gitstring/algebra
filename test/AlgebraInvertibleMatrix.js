(function() {
  var AlgebraInvertibleMatrix, AlgebraMatrix, Element, RealElement, algebra, data1, data2, elements, matrix, order, x, y;

  algebra = require('../index');

  AlgebraMatrix = algebra.AlgebraMatrix;

  AlgebraInvertibleMatrix = algebra.AlgebraInvertibleMatrix;

  RealElement = algebra.RealElement;

  data1 = 2;

  data2 = 3;

  x = new RealElement(data1);

  y = new RealElement(data2);

  Element = RealElement;

  elements = [x, y, y, x];

  order = 2;

  matrix = new AlgebraInvertibleMatrix(Element, order, elements);

  describe('AlgebraInvertibleMatrix', function() {
    describe('Inheritance', function() {
      return it('is an AlgebraMatrix', function() {
        return matrix.should.be.instanceOf(AlgebraMatrix);
      });
    });
    describe('Constructor', function() {
      it('has signature (Element, order)');
      return it('has signature (Element, order, elements)');
    });
    describe('Attributes', function() {
      describe('#order', function() {
        return it('returns the order of the matrix', function() {
          return matrix.order.should.eql(order);
        });
      });
      return describe('#determinant', function() {
        return it('computes the determinant', function() {
          var det;
          det = data1 * data1 - data2 * data2;
          return matrix.determinant.data.should.eql(det);
        });
      });
    });
    return describe('Methods', function() {
      return describe('#inverse()', function() {
        return it('returns the inverse matrix');
      });
    });
  });

}).call(this);