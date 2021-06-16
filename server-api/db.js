var contracts = require('./db.json');
var emiDetails = require('./db2.json');

module.exports = function () {
  return {
    contracts: contracts,
    emiDetails: emiDetails
  }
}