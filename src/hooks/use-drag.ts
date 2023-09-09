import React from 'react'
import {useReRender} from './use-re-render'

type Position = {
  left: number
  top: number
  x: number
  y: number
}

type EventHandlers = Pick<
  React.ComponentProps<'div'>,
  'onMouseUp' | 'onMouseDown' | 'onMouseLeave' | 'onMouseMove'
>

export function useDrag(
  scrollContainerRef: React.RefObject<HTMLElement>,
): [EventHandlers, Partial<React.CSSProperties>] {
  const [position, setPosition] = React.useState<null | Position>(null)
  const triggerReRender = useReRender()

  const isDragging = !!position
  const scrollContainer = scrollContainerRef.current || ({} as HTMLElement)

  React.useEffect(() => {
    triggerReRender()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!scrollContainer, triggerReRender])

  function handleMouseDown(e: React.MouseEvent<HTMLElement>) {
    setPosition({
      left: scrollContainer.scrollLeft,
      top: scrollContainer.scrollTop,
      x: e.clientX,
      y: e.clientY,
    })
  }

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!isDragging) return

    const dx = e.clientX - position.x
    const dy = e.clientY - position.y

    scrollContainer.scrollTop = position.top - dy
    scrollContainer.scrollLeft = position.left - dx
  }

  function handleMouseUp() {
    setPosition(null)
  }

  const eventHandlers: EventHandlers = {
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseUp,
  }

  const style: Partial<React.CSSProperties> = isDragging
    ? {
        cursor: 'grabbing',
        userSelect: 'none',
        scrollSnapType: 'none',
      }
    : {
        cursor: 'grab',
      }

  return [eventHandlers, style]
}
