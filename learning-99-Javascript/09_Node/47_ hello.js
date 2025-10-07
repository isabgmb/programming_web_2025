// hello.js
const fs = require("fs"); // built-in lib
const path = require("path"); // built-in lib

// Path module provides file path manipulation
const filePath = path.join("data", "text", "hello.txt");

// Most APIs have standard (callback) and "sync" versions
let helloText = fs.readFileSync(filePath);

module.exports = {
    helloText
};
