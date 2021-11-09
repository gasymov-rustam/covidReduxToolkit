export function createArrow(number, onlyArrow) {
  const arrow =
    number === 0 ? (
      '-'
    ) : number > 0 ? (
      <span>&#129045;&#32;{!onlyArrow && number}</span>
    ) : (
      <span>&#129047;&#32;{!onlyArrow && number}</span>
    );
  return arrow;
}

export function createSum(data, key) {
  return data.reduce((total, item) => total += item[key], 0);
}

export function sortBy(key, order, lang) {
  if (key === 'label') {
    return (a, b) => a[key][lang].localeCompare(b[key][lang]) * order;
  } else {
    return (a, b) => (a[key] - b[key]) * order;
  }
}
