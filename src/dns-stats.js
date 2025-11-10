const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = new Map();
  let domain;
  let count;
  let domainArr;
  domains.forEach(element => {
    domainArr = element.split(".");
    domain = "";
    for (let i = domainArr.length - 1; i >= 0; i--) {
      domain = domain + "." + domainArr[i];
      if (stats.has(domain)) {
        count = stats.get(domain);
        count++;
        stats.set(domain, count);
      }
      else {
        stats.set(domain, 1);
      }
    }
  }); 
  return Object.fromEntries(stats);
}

module.exports = {
  getDNSStats
};
