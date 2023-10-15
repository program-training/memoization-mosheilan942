import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [obj, setObj] = useState({ value: "Initial" });

  useEffect(() => {
    setObj({value: "simi"})
  }, [])
  

  return (
    <div className="App">
      <ChildComponent obj={obj} />
    </div>
  );
}

export default App;
