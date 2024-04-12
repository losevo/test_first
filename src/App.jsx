import "./App.css";
import Card from "./Card";

function App() {
  const countOfCards = 12;

  return (
    <main>
      <Card count={countOfCards}/>
    </main>
  );
}

export default App;
