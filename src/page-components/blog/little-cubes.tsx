import {twMerge as cs} from 'tailwind-merge'

export function LittleCubes() {
  return (
    <div
      className={cs(
        'absolute top-0 left-0 w-20 md:w-28 lg:w-48 hue-rotate-[58deg] dark:filter-none',
        'dark:md:opacity-40 dark:2xl:opacity-100',
      )}
    >
      <img src="/images/little-cubes.png" alt="little cubes" width={522} height={1128} />
    </div>
  )
}
