'use strict';

const {license} = require(`../../package.json`);

module.exports = {
  name: `license`,
  description: `Показывает тип лицензии`,
  execute() {
    console.log(`${license}`);
  }
};
