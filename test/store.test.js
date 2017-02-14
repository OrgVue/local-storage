"use strict"

const assert = require("assert")
const leveljs = require("level-js")
const store = require("../src/store.js")

const env = { name: "orgvue", db: leveljs }

describe("store", function() {
  describe("#del", function() {
    it("should delete a value", function(done) {
      store.put("deleteme", "hello world").run(env).fork(done, () => {
        store.del("deleteme").run(env).fork(done, () => {
          store.get("deleteme").run(env).fork(err => done(), done)
        })
      })
    })
  })

  describe("#get", function() {
    it("should throw an error if key doesn't exists", function(done) {
      store.get("_baddef").run(env).fork(err => done(), done)
    })
  })

  describe("#put", function() {
    it("should put a value to the store and retrieve it", function(done) {
      store.put("hello", "world").run(env).fork(done, () => {
        store.get("hello").run(env).fork(done, value => {
          assert.strictEqual(value, "world")
          done()
        })
      })
    })
  })
})
