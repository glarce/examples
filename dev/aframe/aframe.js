const fs = require('fs')

let assets, aframe

assets = fs.readFileSync('./aframe/assets.html')
aframe = fs.readFileSync('./aframe/aframe.html')

function js()
{
  console.log('test')
}

module.exports = {
  js: js,
  assets: assets,
  aframe: aframe
};