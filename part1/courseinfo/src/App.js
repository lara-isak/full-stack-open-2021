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
  return (
    <>
      <p>Course consists of mutiple parts each with its own set of exercises:</p>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App