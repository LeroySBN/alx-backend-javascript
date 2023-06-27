export default function concatArrays(array1, array2, string) {
  const listArray = [...array1, ...array2, ...Array.from(string)];
  return listArray;
}
