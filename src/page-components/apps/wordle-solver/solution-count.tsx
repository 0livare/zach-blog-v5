import {twMerge as cs} from 'tailwind-merge'

export function SolutionCount(props: {
  solvedWords: string[] | null
  allPossibleWords: string[]
  possibleSolutions: string[]
  className?: string
}) {
  const {allPossibleWords, solvedWords, possibleSolutions, className} = props

  const solutionCount = (solvedWords || allPossibleWords).length
  const isShowingAllSolutions = solutionCount === possibleSolutions.length

  return (
    <h2 className={cs('SolutionCount', className)}>
      {solvedWords && solvedWords.length === 0 ? (
        'The wordle words you have entered are invalid.'
      ) : (
        <>
          Possible solutions:{' '}
          <span className="text-sm italic">
            {isShowingAllSolutions ? (
              <>({solutionCount})</>
            ) : (
              <>
                ({possibleSolutions.length} / {solutionCount})
              </>
            )}
          </span>
        </>
      )}
    </h2>
  )
}
