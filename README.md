# grunt-polyfer [![Build Status](https://travis-ci.org/heldr/grunt-polyfer.svg?branch=master)](https://travis-ci.org/heldr/grunt-polyfer)

> Grunt plugin to post process [Polymer CSS polyfills][polyfills-doc] with [Polyfer][npm-url].

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-polyfer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-polyfer');
```

## The "polyfer" task

### Overview
In your project's Gruntfile, add a section named `polyfer` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  polyfer: {
    files: {
      'dest/output.css': ['src/input.css', 'src/input2.css']
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_0.0.1_ - first release

## License
MIT © [Helder Santana](https://github.com/heldr)

[npm-url]: https://npmjs.org/package/polyfer
[polyfills-doc]: https://www.polymer-project.org/docs/polymer/styling.html#directives
