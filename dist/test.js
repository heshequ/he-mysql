'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * select方法
 */
var select = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var sql, arg;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = ['select * from new'];
            arg = null;
            _context.t0 = console;
            _context.next = 5;
            return my.query(MYSQL.MAIN, sql, arg);

          case 5:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function select() {
    return _ref.apply(this, arguments);
  };
}();

/**
 * insert方法
 */


var insert = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var sql, arg;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sql = ['insert into new(name, sort) values(?, ?)'];
            arg = ['yuantao', 1];
            _context2.t0 = console;
            _context2.next = 5;
            return my.query(MYSQL.MAIN, sql, arg);

          case 5:
            _context2.t1 = _context2.sent;

            _context2.t0.log.call(_context2.t0, _context2.t1);

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function insert() {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 实际操作
 */


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mysql = require('mysql');
var my = require('./mysql');

/**
 * mysql 数据库设置(可多库)
 */
var MYSQL_DATABASE = {
  MAIN: {
    host: 'localhost',
    user: 'root',
    password: 'Ac591234',
    database: 'mytest'
  }
};

/**
 * mysql 连接池对象(可多库)
 */
var MYSQL = {
  MAIN: mysql.createPool(MYSQL_DATABASE.MAIN)
};select();
insert();