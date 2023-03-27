//Ex useEffect{} using react
import React,{useState,useEffect} from 'react'
function App(){
  const[count,setCount]=useState(1);
  useEffect(()=>console.log(count),[count])
  return(
    <>
    <p>You Clicked {count} Number of Time</p>
    <button onClick={()=>setCount(count+1)}>Click Me</button>
    </>
  )
}
export default App
/*use state in React
ex1:import React, { useState } from 'react'

const App = () => {
  const [count,setcount]=useState(0);
  return (
    <div>
      <center>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>change</button>
      </center>
    </div>
  )
}
export default App*/
/*ex2 import React, { useState } from 'react'

const App = () => {
  const [name,setname]=useState("Devika");
  return (
    <div>
      <center>
        <h1>{name}</h1>
        <button onClick={()=>setname("Thirumala devika")}>change</button>
      </center>
    </div>
  )
}

export default App*/


/*
inline styling
import React from 'react'

import Fun from "./Component/Fun"
import Cls from "./Component/Cls"
import Txt from "./Component/Txt"
function App(){
    return <>
    
        <Cls />
        <Fun />
        <Txt />
   <div style={{margin:"10px"}}>
   <h1 style={{color:"white",backgroundColor:"red",textAlign:"center",padding:"50px"}}>Hello World !!</h1> ,
   </div>
    <hr />
    </>
    
}
export default App*/
/*onclick Event handler
import React from 'react'

const App = () => {
  return (
    <div>
      <button onClick={()=>console.log("clicked")}>Click here</button>
    </div>
  )
}

export default App*/
