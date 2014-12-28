/*
 * grunt-polyfer
 * https://github.com/heldr/grunt-polyfer
 *
 * Copyright (c) 2014 Helder Santana
 * Licensed under the MIT license.
 */

'use strict';

var polyfer = require('polyfer');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('polyfer', 'Grunt plugin to post process Polymer CSS polyfills with Polyfer', function () {

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        return polyfer(grunt.file.read(filepath));
      }).join('');

      // Write the destination file.
      grunt.file.write(file.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
