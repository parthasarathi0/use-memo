import React, { useMemo, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doublenum = useMemo(()=>{
    return slow(number)
  },[number])
  
  const colours = useMemo(()=>{
    return  {
    color: dark ? "white" : "#000",
    backgroundColor: dark ? "#000" : "#fff",
    width: "100%",
    height: "10px",
  }
  },[dark])
  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />{" "}
      <button onClick={() => setDark((curr) => !curr)}>Clickme</button>
      <p>{doublenum}</p>
      <div className="div" style={colours}></div>
    </div>
  );
};



function slow(num) {
  console.log(num);
  
  for(let i=0; i<=1000000000;i++){

  }
  console.log(num*2);
  
  return num * 2
}

export default App;
