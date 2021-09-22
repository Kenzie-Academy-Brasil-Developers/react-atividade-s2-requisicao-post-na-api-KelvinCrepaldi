import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Display from "./components/Display";

function App() {
  const [userAllowed, setuserAllowed] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Login setuserAllowed={setuserAllowed} />
        <Display userAllowed={userAllowed} />
      </header>
    </div>
  );
}

export default App;
