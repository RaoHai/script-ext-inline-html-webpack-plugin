'use strict';

const normalizeOptions = require('./config');
const EVENT = 'html-webpack-plugin-alter-asset-tags';

function createTag(script) {
  return {
    tagName: 'script',
    attributes: { type: 'text/javascript' },
    closeTag: true,
    innerHTML: script,
  };
}

class ScriptExtInlineWebpackPlugin {
  constructor(options) {
    this.options = normalizeOptions(options);
  }
  apply(compiler) {
    const options = this.options;
    compiler.plugin('compilation', compilation => {
      compilation.plugin(EVENT, (pluginArgs, callback) => {
        try {
          if (options.prepend) {
            pluginArgs.body.unshift(createTag(options.prepend));
          }
          if (options.append) {
            pluginArgs.body.push(createTag(options.append));
          }
        } catch (err) {
          callback(err);
        }
        callback(null, pluginArgs);
      });
    });
    compiler.plugin('emit', (compilation, callback) => {
      callback();
    });
  }
}

module.exports = ScriptExtInlineWebpackPlugin;
