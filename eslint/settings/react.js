const fs = require('fs');
const path = require('path');

let settings = {};

// rax
if (fs.existsSync(path.resolve('node_modules', 'rax'))) {
  settings = {
    ...settings,
    react: {
      version: '999.999.999',
      pragma: 'createElement',
      pragmaFrag: 'Fragment',
    },
  };
}

module.exports = settings;
