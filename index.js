module.exports = (function() {

  var x = fav_num = require('./fav_num.js');

  console.log("Hallo Liebe Welt!");

  setInterval(function() {
    console.log('Meine Animation Nr 1: ', fav_num);
  }, 4001);

  return 'x'
})();
