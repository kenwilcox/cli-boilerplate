#!/usr/bin/env node

var fs   = require('fs')
var os   = require('os');
var exec = require('child_process').exec

fs.readFile('boilerplate.html', function read(err, data) {
  if (err) return console.log(err)
  var command = "echo '" + data.toString() + "' | ";
  var platform = os.platform();
  if (platform === "darwin") {
    command += "pbcopy";
  } else if (platform === "win64" || platform === "win32" {
    command += "clip";
  }
  // TODO - figure out which command to use for platform === 'linux'
  exec(command, function clipboarded(err, stdout, stdrr) {
    if (err) return console.log(err)
    console.log("Copied!")
  })
})
