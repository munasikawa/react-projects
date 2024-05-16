const List = () => {
  const fruits = [
    { id: 1, name: "pineapple", calories: 99 },
    { id: 2, name: "mango", calories: 120 },
    { id: 3, name: "grapes", calories: 138 },
    { id: 4, name: "tangerine", calories: 106 },
    { id: 5, name: "lemons", calories: 58 },
  ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  fruits.sort((a, b) => a.calories - b.calories); // NUMERIC ORDER
  //   fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC ORDER

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  //   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  //    Map Over all Fruits sorted by Alphabetical Order or Numerical Order
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;<b>{fruit.calories}</b>
    </li>
  ));

  /** Filter Fruits by Low Calories 
  const listItems = lowCalFruits.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name}: &nbsp;<b>{lowCalFruit.calories}</b>
    </li>
  ));
  */

  /** Filter Fruits by High Calories 
  const listItems = highCalFruits.map((highCalFruit) => (
    <li key={highCalFruit.id}>
      {highCalFruit.name}: &nbsp;<b>{highCalFruit.calories}</b>
    </li>
  ));
  */

  return <ol>{listItems}</ol>;
};

export default List;
