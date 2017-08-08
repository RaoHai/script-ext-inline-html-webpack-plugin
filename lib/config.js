'use strict';

const DEFAULT_OPTIONS = {};

const normalizeOptions = options => {
  if (!options) {
    return DEFAULT_OPTIONS;
  }
  return Object.assign({}, DEFAULT_OPTIONS, options);
};

module.exports = normalizeOptions;
