import React from 'react'
import ReactDOM from 'react-dom'

//FORMA CORTA DE COMPONENTES 
const Title = ({course}) => <h1>{course}</h1>



// FORMA LARGA
const Content = (props) => {
    return (
      <h3>{props.texto + ": " + props.numero}</h3>
    )
}

const Total = (props) => {
  return (
    props.a + props.b + props.c
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <p>
        <Content texto={part1} numero={exercises1}/>
      </p>
      <p>
        <Content texto={part2} numero={exercises2}/>
      </p>
      <p>
        <Content texto={part3} numero={exercises3}/>
      </p>
      <p>Number of exercises <Total a={exercises1} b={exercises2} c={exercises3}/></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))