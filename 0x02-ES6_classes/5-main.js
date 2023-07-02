import Building from './5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  new TestBuilding(200); // eslint-disable-line no-new
} catch (err) {
  console.log(err);
}
