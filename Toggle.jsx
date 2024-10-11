import React,{useState} from 'react'

function Toggle() {
    const[isToggled, setIsToggled]=useState("")

    const togglebackground=()=>{
      setIsToggled(!isToggled)
    }
  return (
    <div 
    style={{
      backgroundColor:isToggled?"lightpink":"lightcoral",
      display:"flex",
      height:"100vh",
      justifyContent:"center",
      alignItems:"center",
       
    }}>
     <button onClick={togglebackground}>{isToggled ? "Switch to coral" : "Switch to pink"}</button>
     </div>
  )
}

export default Toggle