# local-storage

A pure, functional wrapper around [levelup](https://github.com/Level/levelup) using the `Reader` and `Task` Monads.

## usage
```js
const leveljs = require("level-js") // or any implementation compatible with levelup
const store = require("local-storage")

const db = { name: "mydatabase", db: leveljs }
store.put("mykey", "myvalue").run(env).fork(
  err => console.log("Failed: " + err),
  () => console.log("Success!")
)
```
