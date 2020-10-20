#!/usr/bin/env node

const path = require('path')
const gzipSize = require('gzip-size')

for (let file of ['esbuild.js', 'terser.js']) {
  console.log(
    `${file} => ${gzipSize.fileSync(path.join(__dirname, 'dist', file))}`
  )
}
