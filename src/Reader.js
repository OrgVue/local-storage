"use strict"

// data Reader e a = Reader (e -> a)
const Reader = run => ({
  run: run
})
Reader.get = Reader(e => e)

module.exports = Reader
