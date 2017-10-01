(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.nth = function (inArray, inIndex) {
    if (inIndex >= 0) {
      return inArray[inIndex];
    } else {
      return inArray.slice( inIndex )[0];
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nth;
  }

}());
