"use strict"

// data Reader e a = Reader (e -> a)
const Reader = run => ({
  map: f => Reader(e => f(run(e))),
  run: run
})
Reader.get = Reader(e => e)

module.exports = Reader
