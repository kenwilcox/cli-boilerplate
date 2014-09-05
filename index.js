#!/usr/bin/env node

var fs   = require('fs')
var os   = require('os');
var exec = require('child_process').exec;

//process.chdir(__dirname.split("/").pop());
//console.log(__dirname.split("/").pop() + '/boilerplate.html');
// Make sure we open the right file
fs.readFile(__dirname.split("/").pop() + '/boilerplate.html', function read(err, data) {
  if (err) return console.log(err)
  var command = "echo '" + data.toString() + "' | ";
  var platform = os.platform();
  if (platform === "darwin") {
    command = "echo '" + data.toString() + "' | pbcopy";
  } else if (platform === "win64" || platform === "win32") {
    command = 'echo "' + data.toString().replace("\"", "'") + '" | clip';
  }
  // TODO - figure out which command to use for platform === 'linux'
  console.log(command);
  exec(command, function clipboarded(err, stdout, stdrr) {
    if (err) return console.log(err)
    console.log("Copied!")
  })
})
