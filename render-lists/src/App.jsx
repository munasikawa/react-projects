import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "pineapple", calories: 99 },
    { id: 2, name: "mango", calories: 120 },
    { id: 3, name: "grapes", calories: 138 },
    { id: 4, name: "tangerine", calories: 106 },
    { id: 5, name: "lemons", calories: 58 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "brocolli", calories: 50 },
  ];

  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
