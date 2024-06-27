import "./App.css";
import TextCustom from "./components/polymorphic/TextCustom";

function App() {
  return (
    <div className="App">
      <TextCustom as="h1">Heading 1</TextCustom>
      <TextCustom as={"h2"}>Heading 2</TextCustom>
      <TextCustom as={"h3"}>Heading 3</TextCustom>
      <TextCustom as={"h4"}>Heading 4</TextCustom>
      <TextCustom as={"h5"}>Heading 5</TextCustom>
      <TextCustom as={"h6"}>Heading 6</TextCustom>
      <TextCustom as={"label"} htmlFor="input">
        Label
      </TextCustom>
      <TextCustom as={"input"} name="input" />
    </div>
  );
}

export default App;
