// ## store

"use strict"

// data DB = DB {
//   name :: String,
//   version :: Number,
//   versions :: Object String [String]
//  }

// data DBError = DBError {
//    key :: String,
//    message :: String,
//    store :: String
//  }

// Imports.
/* global window */

// write :: String -> String -> a -> State DB (Task DBError ())
const write = store => (key, value) => {
  const request = window.indexedDB.open("orgvue")

  request.onerror = e => ret("Failed to open db: " + e)

  request.onupgradeneeded = e => {
    const db = request.result

    
    const store = db.createObjectStore("department")

    //store.transaction.oncomplete = e =>
  }

  request.onsuccess = e => {
    const db = request.result

    const tx = db.transaction(["department"], "readwrite")

    tx.oncomplete = e => ret("Write successful: " + e)
    tx.onerror = e => ret("Failed to write: " + e.target.error)

    const store = tx.objectStore("department")
    store.put(value, key)
  }
}

// Exports.
module.exports = {
  write: write
}
