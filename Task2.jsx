import React, { useState } from 'react'

function Task2() {
    const[text,setText]=useState("")

    const countWords=text.split(" ").filter(word=>word).length
    const countCharacters=text.length

     const clearText=()=>{//to clear text in the text area
        setText(""); //Resets the text state to an empty string
     } 

     const removeLastWord=()=>{
     const words=text.split(" ").filter(word=>word)//split text into words
     words.pop()
     setText(words.join(" "))//Join remaining words back into a string and update state
     }
     
  return (
    <div style={{ 
        height:"100vh",width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f046",
        flexDirection:"column"         
    }}>
        <textarea 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Type Here..."
         
        />
        <p>Number of words: {countWords}</p>
        <p>Number of characters: {countCharacters}</p>

        <button onClick={clearText} style={{marginBottom:"10px"}} >Clear Text</button>
        <button onClick={removeLastWord}>Remove Last Word</button>
    </div>
  )
}

export default Task2