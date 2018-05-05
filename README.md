# qooxdoo TokenField widget contrib libraries

A widget implementing the token field concept known from [Mac OS](https://developer.apple.com/macos/human-interface-guidelines/fields-and-labels/token-fields/) for the qooxdoo framework.

This version is developed with the new compiler for qooxdoo, but still supports
the legacy generator. 

## Usage
see [code of Demo application](source/class/tokenfield/demo/Application.js)

## API
http://cboulanger.github.io/qx-contrib-TokenField/api/#tokenfield

## Online demo
http://cboulanger.github.io/qx-contrib-TokenField/

## Run the demo locally
- `npm install`
- `pushd node_modules/qxcompiler && npm link && popd`
- `qx serve`
- Open your browser at localhost:8080

## Install in your qooxdoo app
- `qx contrib update`
- `qx contrib list`
- `qx contrib install cboulanger/qx-contrib-TokenField`