// ## store

"use strict"

// data DB = DB {
//   name :: String
//  }


// Imports.
const leveljs = require("level-js")
const levelup = require("levelup")
const Reader = require("./Reader.js")
const Task = require("./Task.js")

// data DBError = DBError {
//    key :: String,
//    message :: String
//  }
const DBError = (message, key) => ({
  key: key,
  message: String(message)
})

// del :: String -> Reader DB (task DBError ())
const del = key => {
  return Reader(env => {
    return Task((rej, res) => {
      if (!env._db) env._db = levelup(env.name, { db: leveljs })

      env._db.del(key, err => {
        if (err) rej(DBError(err, key)); else res()
      })
    })
  })
}

// ensureDB :: Reader DB (Task DBError a) -> Reader DB (Task DBError a)
const ensureDB = x => x

// get :: String -> Reader DB (Task DBError a)
const get = (key, value) => {
  return ensureDB(Reader(env => {
    return Task((rej, res) => {
      if (!env._db) env._db = levelup(env.name, { db: leveljs })
      env._db.get(key, (err, value) => {
        if (err) rej(DBError(err, key)); else res(value)
      })
    })
  }))
}

// put :: String -> a -> Reader DB (Task DBError ())
const put = (key, value) => {
  return Reader(env => {
    return Task((rej, res) => {
      if (!env._db) env._db = levelup(env.name, { db: leveljs })
      env._db.put(key, value, err => {
        if (err) rej(DBError(err, key)); else res()
      })
    })
  })
}

// Exports.
module.exports = {
  del: del,
  get: get,
  put: put
}
