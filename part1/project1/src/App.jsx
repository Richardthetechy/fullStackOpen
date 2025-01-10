import { useState } from "react";
function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}
function Part(props) {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}
function Content(props) {
  console.log(props.parts)
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

function Total(props) {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}
// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }




//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
//     </div>
//   )
// }
function App() {
  const [counter, setCounter] = useState(0)
  function handleClick() {
    setCounter(counter + 1)
  }
  return (
    <button onClick={handleClick}>{counter}</button>
  )
}
export default App
// {
//   course.parts.map((part, index) => (
//     <Content key={index} part={part.name} exercises={part.exercises} />)
//   )
// }