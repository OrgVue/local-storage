"use strict"

// data Reader e a = Reader (e -> a)
const Reader = run => ({
  // map :: (a -> b) -> Reader e a -> Reader e b
  map: f => Reader(e => f(run(e))),

  // run :: e -> Reader e a -> a
  run: run
})
Reader.get = Reader(e => e)

module.exports = Reader
