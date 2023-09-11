import React from 'react'
import {GameBoard} from './game-board'

export function JeopardyGame() {
  const [roundOneScore, setRoundOneScore] = React.useState(0)
  const [roundTwoScore, setRoundTwoScore] = React.useState(0)

  function updateScore(oldScore: number, newScore: number, round: number) {
    let scoreDelta = newScore - oldScore
    if (round === 1) setRoundOneScore(roundOneScore + scoreDelta)
    if (round === 2) setRoundTwoScore(roundTwoScore + scoreDelta)
  }

  return (
    <div className="pb-64 relative">
      <ul className="px-4">
        <li>
          <b>One click:</b> Did not answer the question
        </li>
        <li>
          <b>Two clicks:</b> Answered the question correctly
        </li>
        <li>
          <b>Three clicks:</b> Answered the question incorrectly
        </li>
        <li>
          <b>Four clicks:</b> Reset the question
        </li>
      </ul>

      <Heading>Round 1</Heading>
      <GameBoard
        values={[200, 400, 600, 800, 1000]}
        colCount={6}
        updateScore={updateScore}
        round={1}
      />
      <p className="mt-4 px-4">Total for jeopardy round: ${roundOneScore}</p>

      <Heading>Round 2</Heading>
      <GameBoard
        values={[400, 800, 1200, 1600, 2000]}
        colCount={6}
        updateScore={updateScore}
        round={2}
      />
      <p className="mt-4 px-4">Total for double jeopardy round: ${roundTwoScore}</p>
      <p className="text-3xl mt-16 px-4">Final score: ${roundOneScore + roundTwoScore}</p>
    </div>
  )
}

function Heading(props: React.ComponentProps<'h1'>) {
  return <h2 {...props} className="mt-16 mb-4 px-4 text-3xl" />
}
