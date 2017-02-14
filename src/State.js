"use strict"

// data State s a = State (s -> (s, a))
const State = run => ({
  run: run
})

module.exports = State
