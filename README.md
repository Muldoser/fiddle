# Fiddle

This is a simple project, used as a local and raw [jsFiddle](https://jsfiddle.net/).

## Project under maintenance

This project is built on deprecated packages. We are in the updating and
configuring them, using the latest toolings. Probable big changes will be
the implementation of webpack's latest version and npm instead of npm.

## Usage

```shell
# To get things going the first time:
$ npm

# To really get things going:
# This starts a webpack-dev-server with index.js that allows you to do simple JavaScript, HTML and CSS stuff with livereload.
$ npm start

# If you just want to test some javascript stuff in the console/terminal with server.js:
# Do note that nodemon will stumble when importing css and using `document` etc.
# This is why we use a separate js file, so we can keep this logic separated.
$ npm watch
```

## Files

### index.js

- Run: `npm start`
- Config: _webpack.config.js_

This file is used for running a web client.

### server.js

- Run: `npm watch`
- Config: _webpack.server.config.js_

This file is used for running with target node. The main reason for this is to open up the possibility to fiddle with stuff like [`fs`](https://nodejs.org/api/fs.html), which is not accessible in the browser.
