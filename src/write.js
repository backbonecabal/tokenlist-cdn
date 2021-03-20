/** @file write */
const generate = require('./generate');
console.log(JSON.stringify(generate(), null, 2));
