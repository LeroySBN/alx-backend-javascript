export default function groceriesList() {
  const groceries = new Map();
  const items = [['Apples', 10], ['Tomatoes', 10], ['Pasta', 1], ['Rice', 1], ['Banana', 5]];
  for (const item of items) {
    groceries.set(item[0], item[1]);
  }
  return groceries;
}
