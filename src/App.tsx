import React from "react";
import Screenshot from "./Screenshot";

function App() {
  return (
    <div className="App">
      <div style={{ width: 300, height: 300 }}>
        <Screenshot url={process.env.PUBLIC_URL + "/demo.png"} type="LONG" />
      </div>
    </div>
  );
}

export default App;
