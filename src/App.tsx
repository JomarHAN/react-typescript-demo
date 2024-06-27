import { useState } from "react";
import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div className="App">
      <Private
        name="Cecilia"
        isLoggedIn={isLoggedIn}
        component={Profile}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default App;
