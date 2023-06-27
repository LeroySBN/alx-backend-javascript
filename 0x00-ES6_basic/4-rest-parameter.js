export default function returnHowManyArguments(...Args) {
  let total = 0;
  for (const arg of Args) { // eslint-disable-line
    total += 1;
  }
  return total;
}
