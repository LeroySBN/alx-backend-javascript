export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let newSet = [];
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      newSet.push(item.slice(startString.length));
    }
  }
  return newSet.join('-');
}
