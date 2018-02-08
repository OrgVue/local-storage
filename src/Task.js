"use strict"

// ```
// data Task e a = Task ((e -> ()) -> (a -> ()))
// ```
const Task = fork => ({
  // ```
  // fork :: (e -> ()) -> (a -> ()) -> ()
  // ```
  fork: fork,

  // ```
  // bind :: (a -> Task e b) -> Task e a -> Task e b
  // ```
  bind: f => Task((rej, res) => fork(rej, x => f(x).fork(rej, res))),
})

module.exports = Task
