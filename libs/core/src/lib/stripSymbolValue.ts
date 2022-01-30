export function stripSymbolValue(sym: symbol) {
  const symStr = String(sym);
  const i = symStr.indexOf('$');
  return symStr.substring(7, i >= 0 ? i : symStr.length - 1);
}
