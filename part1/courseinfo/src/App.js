import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>The name of the course is "{props.course.name}"</h1>
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
      <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Total number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App