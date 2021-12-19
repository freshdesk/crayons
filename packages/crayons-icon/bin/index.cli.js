#!/usr/bin/env node

/**
 * @freshworks/crayons-icon
 * Crayons-Icon as NodeJS-CLI Tool to optimize SVGs and generate JS Imports for icons.
 *
 * @author Freshworks Inc
 */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const json2yml = require('json-to-pretty-yaml');

const init = require('../utils/init');
const cli = require('../utils/cli');
const log = require('../utils/log');
const build = require('../utils/svgo.runner');
const defPluginOptions = require('../utils/default.svgo.config.js');

const input = cli.input;
const flags = cli.flags;

let alert = { type: '', name: '', msg: '' };
(async () => {
  init({ clear: true });
  input.includes(`help`) ? cli.showHelp(0) : '';

  const dump_yml = (defPluginOptions, destYml) => {
    fs.promises.mkdir(destYml, { recursive: true }).catch(console.error);
    const data = json2yml.stringify(defPluginOptions);
    fs.writeFileSync(path.join(destYml, 'fw-crayons.icon.svgo.yml'), data);
    alert = {
      type: 'success',
      name: 'DONE',
      msg: `FILE - 'fw-crayons.icon.svgo.yml' generated at ${destYml}`,
    };
    log(alert);
  };

  try {
    if (
      input.length > 0 &&
      !input.includes(`svgo`) &&
      !input.includes(`svgoYML`) &&
      !input.includes(`help`)
    )
      throw new Error('!! Invalid Command !!');

    let pluginOptions = JSON.parse(defPluginOptions());
    if (input.includes('svgo')) {
      if (flags.config !== 'default') {
        const ymlFile = fs.readFileSync(flags.config, 'utf8');
        pluginOptions = yaml.load(ymlFile);
      }
      alert = { type: 'info', name: 'Starting Optimization', msg: `` };
      log(alert);
      alert = {
        type: 'success',
        name: 'DONE',
        msg: `Applied following SVGO pluginOptions :-\n\n${json2yml.stringify(
          pluginOptions
        )}`,
      };
      !flags.quiet && log(alert);
      build(path.join('./'), flags.source, flags.destination, pluginOptions);
    }

    if (input.includes(`svgoYML`)) {
      dump_yml(pluginOptions, flags.destYml);
    }

    if (!flags.cli) {
      // Used for building crayons-icon system
      dump_yml(pluginOptions, './dist');
      alert = { type: 'info', name: 'Starting Optimization', msg: `` };
      log(alert);
      alert = {
        type: 'info',
        name: 'Applied SVGO pluginConfig',
        msg: `SVGs are optimized with following parameters :-\n\n${json2yml.stringify(
          pluginOptions
        )}`,
      };
      !flags.quiet && log(alert);
      build(path.join('./'), './icons', './dist/icons', pluginOptions);
    }
  } catch (e) {
    alert = {
      type: 'error',
      name: 'ERROR',
      msg: `Invalid Command or Options. Kindly see HELP topics by passing help command.${e}`,
    };
    log(alert);
  }
})();
