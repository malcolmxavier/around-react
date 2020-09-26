const fs = require('fs').promises;

function getFileContent(path) {
  return fs.readFile(path, { encoding: 'utf-8' })
    .then(JSON.parse)
    .catch(console.log);
}

module.exports = getFileContent;
