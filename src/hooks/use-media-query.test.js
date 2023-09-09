/**
 * @jest-environment jsdom
 */

import {renderHook} from '@testing-library/react'

import {matchMedia, matches, addEventListener, removeEventListener} from '../test-utils'
import {useMediaQuery, breakpointMapping} from './use-media-query'

beforeEach(() => {
  matchMedia.mockClear()
  addEventListener.mockClear()
  removeEventListener.mockClear()
  window.matchMedia = matchMedia
})

describe('types of breakpoints', () => {
  it('creates min width query with a breakpoint', () => {
    renderHook(() => useMediaQuery({above: 'md'}))

    // @ts-ignore
    const queryString = matchMedia.mock.calls[0][0]

    const {md} = breakpointMapping
    expect(queryString).toBe(`(min-width: ${md}px)`)
  })

  it('creates min width query with a number', () => {
    const size = 123
    renderHook(() => useMediaQuery({above: size}))

    // @ts-ignore
    const queryString = matchMedia.mock.calls[0][0]
    expect(queryString).toBe(`(min-width: ${size}px)`)
  })

  it('passes through a full media query string', () => {
    const query = '(min-width: 444px)'
    renderHook(() => useMediaQuery(query))

    // @ts-ignore
    const queryString = matchMedia.mock.calls[0][0]
    expect(queryString).toBe(query)
  })
})

describe('types of queries', () => {
  it('creates max width query', () => {
    renderHook(() => useMediaQuery({below: 'lg'}))

    // @ts-ignore
    const queryString = matchMedia.mock.calls[0][0]

    const {lg} = breakpointMapping
    expect(queryString).toBe(`(max-width: ${lg}px)`)
  })

  it('creates a dual min & max width query', () => {
    renderHook(() => useMediaQuery({above: 'md', below: 'xl'}))

    // @ts-ignore
    const queryString = matchMedia.mock.calls[0][0]

    const {md, xl} = breakpointMapping
    expect(queryString).toBe(`(min-width: ${md}px) and (max-width: ${xl}px)`)
  })
})

describe('media query creation', () => {
  it('creates a JS media query', () => {
    renderHook(() => useMediaQuery({above: 'md'}))
    expect(matchMedia).toHaveBeenCalled()
  })

  it('adds a change event listener', () => {
    renderHook(() => useMediaQuery({above: 'md'}))
    expect(addEventListener.mock.calls[0][0]).toBe('change')
  })

  it('removes the change event listener on unmount', () => {
    const {unmount} = renderHook(() => useMediaQuery({above: 'md'}))
    unmount()
    expect(removeEventListener.mock.calls[0][0]).toBe('change')
  })

  it('returns the matches from matchMedia()', () => {
    const {result} = renderHook(() => useMediaQuery({above: 'md'}))
    expect(result.current).toBe(matches)
  })
})
