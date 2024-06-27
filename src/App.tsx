import "./App.css";
import ButtonCustom from "./components/html/ButtonCustom";
import InputCustom from "./components/html/InputCustom";

function App() {
  return (
    <div className="App">
      <InputCustom value={"hello"} />
      <ButtonCustom variant="primary">Custom Button</ButtonCustom>
    </div>
  );
}

export default App;
