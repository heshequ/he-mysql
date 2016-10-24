const mysql = require('mysql')
const my = require('./mysql')

/**
 * mysql 数据库设置(可多库)
 */
const MYSQL_DATABASE = {
  MAIN: {
    host: 'localhost',
    user: 'root',
    password: 'Ac591234',
    database: 'mytest'
  }
}

/**
 * mysql 连接池对象(可多库)
 */
const MYSQL = {
  MAIN: mysql.createPool(MYSQL_DATABASE.MAIN)
}

/**
 * select方法
 */
async function select () {
  let sql = ['select * from new']
  let arg = null
  console.log(await my.query(MYSQL.MAIN, sql, arg))
}

/**
 * insert方法
 */
async function insert () {
  let sql = ['insert into new(name, sort) values(?, ?)']
  let arg = ['yuantao', 1]
  console.log(await my.query(MYSQL.MAIN, sql, arg))
}

/**
 * 实际操作
 */
select()
insert()