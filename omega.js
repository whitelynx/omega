// ---------------------------------------------------------------------------------------------------------------------
// Main omega module.
//
// @module omega.js
// ---------------------------------------------------------------------------------------------------------------------

var App = require('./lib/app').App;

// Create a new omega application
var app = new App();

// ---------------------------------------------------------------------------------------------------------------------

module.exports = {
    app: app
}; // end exports

// ---------------------------------------------------------------------------------------------------------------------