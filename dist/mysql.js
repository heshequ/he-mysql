'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash');

/**
 * 执行一次或多次查询操作
 * @param config object 连接mysql数据库时的配置项
 * @param querys any 查询字符串，可使用?参数，必须是字符串或数组
 * @param values any 查询参数的值，每值可以是任意类型，但必须与查询参数数量一致
 */
var query = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(pool, sqls, args) {
    var data, i, l;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            assertArgs(sqls, args);
            data = [];
            i = 0, l = sqls.length;

          case 3:
            if (!(i < l)) {
              _context.next = 12;
              break;
            }

            _context.t0 = data;
            _context.next = 7;
            return execSingleQuery(pool, sqls[i], getArg(i, args));

          case 7:
            _context.t1 = _context.sent;

            _context.t0.push.call(_context.t0, _context.t1);

          case 9:
            i++;
            _context.next = 3;
            break;

          case 12:
            return _context.abrupt('return', data);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function query(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 执行单条sql语句，不管是query还是push，都可以执行
 */
var execSingleQuery = function execSingleQuery(pool, sql, arg) {
  return new _promise2.default(function (resolve, reject) {
    // 使用连接池进行操作
    pool.getConnection(function (err, conn) {
      if (err) throw err;
      conn.query(sql, arg, function (err, result) {
        if (err) throw err;
        conn.release();
        resolve(result);
      });
    });
  });
};

/**
 * 断言sql参数是否正确
 * @param sqls array 需要判断的sql语句数组
 * @param args array 需要判断的参数数组
 */
var assertArgs = function assertArgs(sqls, args) {
  if (!_.isArray(sqls)) {
    throw new Error('sqls必须为数组！');
  }
  if (!_.isArray(args) && args !== null) {
    throw new Error('args必须为数组或null！');
  }
};

/**
 * 根据index，返回一个可用的arg
 * @param index number 被遍历的索引
 * @param args array 被遍历的参数数组
 */
var getArg = function getArg(index, args) {
  if (args === null) {
    return null;
  }
  if (_.isArray(args[index])) {
    return args[index];
  } else {
    return args;
  }
};

/**
 * 导出
 */
exports.query = query;