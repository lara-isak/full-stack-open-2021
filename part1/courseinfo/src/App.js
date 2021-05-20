import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>The name of the course is "{props.course}"</h1>
    </>
  )
}

const Part = (props) => {  
  return (
    <>
      <p>{props.part} - Number of exercises: {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <p>Course consists of mutiple parts each with its own set of exercises:</p>
      <Part part={props.part1.name} exercise={props.part1.exercises} />
      <Part part={props.part2.name} exercise={props.part2.exercises} />
      <Part part={props.part3.name} exercise={props.part3.exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Total number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App