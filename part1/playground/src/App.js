// import the useState Hook from React
import React, { useState } from 'react'

const App = () => {
  /* 
    - declaring the new state variable by calling the useState Hook
    - useState Hook accepts only 1 argument and that is the initial state (which in functional components it can be an object, an array, a number, a string...)
    - useState Hook retuns a pair of values (initial / current state, function that updates the initial / current state) which we assign to song & updateSong variables (in this specific example)
    - 
  */
  const [ song, updateSong ] = useState("Nothingman")

  return (
    <div>
      <p>Currently your favorite PJ song is {song}</p>
      <button onClick={() => updateSong(prompt("What is your favorite PJ song now?"))}>Update song</button>
    </div>
  )
}

export default App