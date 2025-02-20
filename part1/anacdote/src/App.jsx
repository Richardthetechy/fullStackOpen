import { useState } from 'react'
const maxIndexFunc = (array) => {
  let maxIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[maxIndex]) {
      maxIndex = i;
    }
  }
  return (maxIndex)
}
const NextButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>Next</button>
  )
}
function VoteButton({ index, handleVote }) {
  return (
    <button onClick={handleVote(index)}>Vote</button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  function handleClick() {
    let random = Math.floor(Math.random() * anecdotes.length)
    const newSelect = random
    setSelected(newSelect)

  }
  const handleVote = (index) => () => {
    const newVote = votes.slice()
    newVote[index] += 1
    setVotes(newVote)
  }
  console.log(selected)
  return (
    <div>
      {anecdotes[selected]}
      <div>
        <NextButton handleClick={handleClick} />
        <p>Votes {votes[selected]}</p>
        {/* <button onClick={handleVote(selected)}>Vote</button> */}
        <VoteButton handleVote={handleVote} index={selected} />
      </div>
      <p>{anecdotes[maxIndexFunc(votes)]}</p>
    </div>
  )
}

export default App