// Reader

"use strict"

// ```
// data Reader e a = Reader (e -> a)
// ```
const Reader = run => ({
  // ```
  // bind :: (a -> Reader e b) -> Reader e a -> Reader e bind
  // ```
  bind: f => Reader(e => f(run(e)).run(e)),

  // ```
  // map :: (a -> b) -> Reader e a -> Reader e b
  // ```
  map: f => Reader(e => f(run(e))),

  // ```
  // run :: e -> Reader e a -> a
  // ```
  run: run
})

// ```
// get :: Reader e e
// ```
Reader.get = Reader(e => e)

// Exports.
module.exports = Reader
