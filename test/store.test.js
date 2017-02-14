"use strict"

const assert = require("assert")
const store = require("../src/store.js")

describe("store", function() {
  describe("#blah", function() {
    it("should", function() {
      store.write("name2", "Piet2")(console.log)
    })
  })
})
