'use strict';

var _marked = [fibonacci].map(regeneratorRuntime.mark);

// for (let i = 0; i < 3; i++) {
//     console.log('i:', i);
// }

// function f() { console.log('I am outside!'); }
// (function () {
//   if (true) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//     f();
//   }
//   f();
// }());

// for (let codePoint of 'foo') {
//   console.log(codePoint)
// }
// let [foo, [[bar], baz]] = [1, [[2], 3]];

var a = [1, 5, 10, 15].find(function (value, index, arr) {
  return value > 9;
});
console.log(a);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = ['a', 'b'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var index = _step.value;

    console.log(index);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = ['a', 'b'].values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var elem = _step2.value;

    console.log(elem);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var foo = 'outer';

function bar() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
    return foo;
  };

  var foo = 'inner';
  console.log(func()); // outer
}

bar();

function fibonacci() {
  var current, next, _ref;

  return regeneratorRuntime.wrap(function fibonacci$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          current = 0;
          next = 1;

        case 2:
          _ref = [next, current + next]; //无限循环

          current = _ref[0];
          next = _ref[1];
          _context.next = 7;
          return current;

        case 7:
          _context.next = 2;
          break;

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
var fib = fibonacci();

console.log(fib.next()); //1
console.log(fib.next()); //2

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = lib[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var v = _step3.value;

    if (v > 100) break;
    console.log(v); //3,5,8...
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}