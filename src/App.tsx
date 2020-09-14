import React from "react";
import Screenshot from "./Screenshot";

function App() {
  return (
    <div className="App">
      <div style={{ width: 300, height: 300 }}>
        <Screenshot url="https://google.com" type="NONE" />
      </div>
    </div>
  );
}

export default App;
