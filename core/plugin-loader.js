const fs = require('fs');
const PATH = require('path');

const { logger } = require('@bot');

const loadedPlugins = [];

const load = (path) => {
  fs.readdir(path, (err, files) => {
    files.forEach(f => {
      const fPath = PATH.join(path, f);
      fs.lstat(fPath, (err, stat) => {
        if (stat.isDirectory()) {
          load(fPath);
        } else {
          const mod = require(fPath);
          loadedPlugins.push(mod);
          logger.log('notify', `Plugin: [${mod.name || 'ERROR'}] Version: [${mod.version || '0'}] Loaded.`);
        }
      });
    });
  });
};

exports.init = () => {
  const modulePath = PATH.join(__dirname, '..', 'plugins');
  load(modulePath);
};

exports.getPlugins = () => loadedPlugins;

//exports.getState = ({ command }) => loadedPlugins.filter(m => m.command === command && m.state === true).length > 0;

exports.getPlugin = (discrim) => loadedPlugins.filter(m => m.discrim === discrim)[0];