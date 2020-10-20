#!/usr/bin/env node

const path = require('path')
const gzipSize = require('gzip-size')

for (let file of ['esbuild.out.js', 'terser.out.js']) {
  console.log(
    `${file} => ${gzipSize.fileSync(path.join(__dirname, 'dist', file))}`
  )
}
