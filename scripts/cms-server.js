#!/usr/bin/env node
'use strict';

/**
 * Run a local server to edit content in the CMS.
 * Make sure to run `yarn build:dev` to build the folder for starting point.
 * node ./scripts/cms-server.js start
 * node ./scripts/cms-server.js start -p / -l . -c example -d static/admin
 */
const program = require('commander');
const express = require('express');
const path = require('path');
const fsExpressAPI = require('./fs/fs-express-api');

const defaultConf = {
  cmsPath: "/admin",
  repoLocation: ".",
  cmsLocation: "public",
  distLocation: "dist",
  port: 8888
}
const config = require("rc")("cmsserver", defaultConf);

const projectRoot = path.join(__dirname, "../");

program
  .version('0.1.0')
  .description('Run the express server')
  .usage('<cmd>')
  .option('-p, --cms-path <cmsPath>', 'CMS server absolute path (virtual)', config.cmsPath)
  .option('-r, --repo-location <repoLocation>', 'repository root location (disk). Starting point for file/folder paths.', config.repoLocation)
  .option('-c, --cms-location <cmsLocation>', 'CMS app location (disk)', config.cmsLocation)
  .option('-d, --dist-location <distLocation>', 'CMS build location (disk)', config.distLocation)
  .action((cmd, command) => {

    console.log(`
    Using ${ command.cmsPath } for absolute url path to CMS.
    Using ${ command.repoLocation } for repo (root) location on disk to read-write.
    Using ${ command.cmsLocation } for cms location.
    Using ${ command.distLocation } for build location.
    `);

    const app = express();

    app.use('/', express.static(path.join(projectRoot, command.repoLocation)));
    app.use(command.cmsPath, express.static(path.join(projectRoot, command.distLocation)));
    app.use(command.cmsPath, express.static(path.join(projectRoot, command.cmsLocation)));

    fsExpressAPI(app);

    app.listen(config.port, function () {
      console.log(`Test CMS app listening on port ${ config.port }!`);
    });
  });

program.on('--help', () => {
  console.log(`
    Examples:

        $ node cms-server start # best used with .cmsserverrc config
        $ node cms-server start -d dist
        $ node cms-server start --dist-location dist --repo-location examples/site
  `);
});

program.parse(process.argv);
