import "./App.css";
import List from "./components/generic/List";

function App() {
  return (
    <div className="App">
      <List
        onClick={(value) => console.log(value)}
        items={[
          {
            id: 1,
            name: "Messi",
          },
          {
            id: 2,
            name: "Ronaldo",
          },
          {
            id: 3,
            name: "Kaka",
          },
        ]}
      />
    </div>
  );
}

export default App;
