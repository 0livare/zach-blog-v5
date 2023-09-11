import React from 'react'
import debounce from 'lodash/debounce'
import {twMerge as cs} from 'tailwind-merge'

import {
  GameRow,
  useWordleWords,
  filterWordList,
  PossibleSolutionWord,
  rankWordList,
  SolutionCount,
} from '~/page-components'

const MAX_SOLUTIONS_TO_SHOW = 50

export type WordleSolverProps = {
  allPossibleWords: string[]
}

export function WordleSolver(props: WordleSolverProps) {
  const {allPossibleWords} = props
  const [words, setWords] = useWordleWords()
  const [solvedWords, setSolvedWords] = React.useState<null | string[]>(null)

  const possibleSolutions = (solvedWords || allPossibleWords).slice(0, MAX_SOLUTIONS_TO_SHOW)

  const wordsRef = React.useRef(words)
  wordsRef.current = words

  const userHasEnteredFirstWord = words[0][0].letter && words[0][4].letter

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const solve = React.useCallback(
    debounce(() => {
      let start = Date.now()
      let filteredWordList = filterWordList(allPossibleWords, wordsRef.current)
      let rankedWordList = rankWordList(filteredWordList)
      setSolvedWords(rankedWordList)
      console.info(`✨ Finished solving in ${Date.now() - start}ms`)
    }, 500),
    [],
  )

  React.useEffect(() => {
    if (!userHasEnteredFirstWord) {
      setSolvedWords(null)
    }
  }, [userHasEnteredFirstWord])

  React.useEffect(() => {
    if (!userHasEnteredFirstWord) return
    solve()
  }, [words, userHasEnteredFirstWord, solve])

  return (
    <>
      <p className="text-center px-4 md:max-w-xl md:mx-auto pt-4 pb-2 md:pb-12">
        Type the words you have so far, then click the tiles to turn them green or yellow.&nbsp;
        <span className="hidden md:inline">
          The suggestions are ranked based on which word will eliminate the most remaining
          possibilities.
        </span>
      </p>

      <div className="flex justify-center items-center gap-8 flex-col  md:flex-row p-4 pt-6 md:pt-10 mx-auto w-[300px] md:w-auto">
        <div className="flex flex-col gap-4 md:gap-8 md:mx-auto">
          {words.map((word, index) => (
            <GameRow key={index} words={words} setWords={setWords} wordIndex={index} />
          ))}
        </div>

        <div className="flex flex-col md:mr-auto md:ml-0 md:w-[280px]">
          <SolutionCount
            allPossibleWords={allPossibleWords}
            possibleSolutions={possibleSolutions}
            solvedWords={solvedWords}
            className="text-xl pr-4 pb-2 md:pb-0 md:h-12 md:-mt-12"
          />
          <p className="pb-6 text-sm md:hidden">
            The suggestions are ranked based on which word will eliminate the most remaining
            possibilities.
          </p>

          <div
            className={cs(
              'inline-flex flex-col gap-4 self-center md:self-start',
              'md:h-[496px] md:overflow-y-auto',
              'md:pr-8',
            )}
          >
            {possibleSolutions.map((solvedWord) => (
              <PossibleSolutionWord key={solvedWord} setWords={setWords}>
                {solvedWord}
              </PossibleSolutionWord>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
