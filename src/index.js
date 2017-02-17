module.exports = function sum(...n) {
  n = n.reduce((p, c) => p + c, 0);
  const fn = (...x) => sum(n + x.reduce((p, c) => p + c, 0));
  fn.valueOf = () => n;
  return fn;
}
