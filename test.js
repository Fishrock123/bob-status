'use strict'

const assert = require('assert').strict
const status = require('./index.js')

assert.equal(status[status.error], 'error')
assert.equal(status[status.end], 'end')
assert.equal(status[status.continue], 'continue')
