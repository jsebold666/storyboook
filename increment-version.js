var packageJson = require('./package.json');
var semver = require('semver');
var fs = require('fs');

var newVersion = semver.inc(packageJson.version, 'patch');
packageJson.version = newVersion;

var newpackageJson = JSON.stringify(packageJson, null, 4);
fs.writeFileSync('package.json', newpackageJson);

console.log("Version: " + newVersion)