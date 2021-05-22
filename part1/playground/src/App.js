// import the useState Hook from React
import React, { useState } from 'react'

// Display component
const Display = ({song}) => <><p>Currently your favorite PJ song is {song}</p></>

// Button component
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  /* 
    - declaring the new state variable by calling the useState Hook
    - useState Hook accepts only 1 argument and that is the initial state (which in functional components it can be an object, an array, a number, a string...)
    - useState Hook retuns a pair of values (initial / current state, function that updates the initial / current state) which we assign to song & updateSong variables (in this specific example)
    - 
  */
  const [ song, setSong ] = useState("Nothingman")

  const displayNewSong = () => setSong(prompt("What is your favorite PJ song now?"))

  const setFavoriteSong = () => setSong("Nothingman")

  return (
    <div>
      <Display song={song} />
      <Button handleClick={displayNewSong} text="Update song" />
      <Button handleClick={setFavoriteSong} text="All time favorite" />
    </div>
  )
}

export default App