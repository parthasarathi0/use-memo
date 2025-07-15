import React, { useEffect, useMemo, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  // const doubNum = slowFun(number)
const doubNum = useMemo(()=>{
 return slowFun(number)
},[number])
  const colors = 
  useMemo(()=>{
return {
    color: dark ?  "#000":"#fff",
    backgroundColor: dark ? "#fff": "#000",
    height: "100px",
    width: "100%",
  }
  },[dark])
  
 useEffect(()=>{
  console.log("theme changed");
  
 },[colors])

  return (
    <div>
      <input type="number" onChange={(e) => setNumber( e.target.value)} />
      <button onClick={()=>setDark((dark)=>!dark)}>toggle</button>
      <div style={colors}>{doubNum}</div>
    </div>
  );
};




const slowFun = (num)=>{
  for ( let i=0 ; i<1000000000 ; i++){

  }
  return num*2
}
export default App;
