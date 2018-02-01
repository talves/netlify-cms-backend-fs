#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');

fs.copySync('node_modules/netlify-cms/dist/cms.css', 'examples/site/admin/cms.css');
fs.copySync('node_modules/netlify-cms/dist/cms.js', 'examples/site/admin/cms.js');
console.log('copied cms assets!');

fs.copySync('dist/fs-backend.css', 'examples/site/admin/fs-backend.css');
fs.copySync('dist/fs-backend.js', 'examples/site/admin/fs-backend.js');
console.log('copied backend assets!');

try {
  fs.mkdirpSync('examples/site/posts');
} catch(e) {
  throw e;
}
try {
  fs.mkdirpSync('examples/site/images');
} catch(e) {
  throw e;
}
