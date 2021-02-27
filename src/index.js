
exports.min = function min (array) {
  if ((array === undefined) || (array.length === 0)) return 0;
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  return array.sort(compareNumeric)[0];
}

exports.max = function max (array) {
  if ((array === undefined) || (array.length === 0)) return 0;
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  return array.sort(compareNumeric)[array.length - 1];
}

exports.avg = function avg (array) {
  if ((array === undefined) || (array.length === 0)) return 0;
  let length = array.length;
  console.log(`length = ${length}`);
  let reduced = array.reduce(function(a,b){
    return a + b;
    });
  return (reduced / length);
}
