import React from 'react'

import {useRandomInterval} from '~/hooks'
import {random} from '~/utils'
import {Sparkle} from './sparkle'

const DEFAULT_COLOR = '#FFC700'

export type SparklesProps = React.ComponentProps<'span'>

/**
 * Add a little flare to some text or an image
 * Modified from: https://www.joshwcomeau.com/react/animated-sparkles-in-react/
 */
export function Sparkles(props: SparklesProps) {
  const {color = DEFAULT_COLOR, children, ...delegated} = props

  const [sparkles, setSparkles] = React.useState(() =>
    Array(3)
      .fill(null)
      .map(() => generateSparkle(color)),
  )

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color)
      const now = Date.now()
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt
        return delta < 750
      })
      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    {
      min: 50,
      max: 450,
    },
  )

  return (
    <span {...delegated} className="inline-block relative">
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
      ))}
      <strong className="relative z-10 font-bold">{children}</strong>
    </span>
  )
}

function generateSparkle(color: string) {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
    },
  }
}
