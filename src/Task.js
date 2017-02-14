"use strict"

// data Task e a = Task ((e -> ()) -> (a -> ()))
const Task = fork => ({
  // fork :: (e -> ()) -> (a -> ()) -> ()
  fork: fork
})

module.exports = Task
