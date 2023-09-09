import {convertToAppropriateUnit} from './convert-to-appropriate-unit'

describe('scales unit up', () => {
  it('converts 16 tbs to 1 cup', () => {
    const original = {amount: 16, unit: 'tbs'}
    const converted = {amount: 1, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('converts 6 tsp to 2 tbs', () => {
    const original = {amount: 6, unit: 'tsp'}
    const converted = {amount: 2, unit: 'tbs'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('converts 480 tsp to 10 cups', () => {
    const original = {amount: 480, unit: 'tsp'}
    const converted = {amount: 10, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })
})

describe('scales unit down', () => {
  it('converts 0.125 cups 2 tbs', () => {
    const original = {amount: 0.125, unit: 'cups'}
    const converted = {amount: 2, unit: 'tbs'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('converts 2/3 tbs to 2 tsp', () => {
    const original = {amount: 2 / 3, unit: 'tbs'}
    const converted = {amount: 2, unit: 'tsp'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('converts 1/24 cup to 4 tsp', () => {
    const original = {amount: 1 / 24, unit: 'cups'}
    const converted = {amount: 2, unit: 'tsp'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })
})

describe('does not scale', () => {
  it('does not convert 1/2 cup', () => {
    const original = {amount: 0.5, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(original)
  })

  it('does not convert 1/4 cup', () => {
    const original = {amount: 0.25, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(original)
  })

  it('does not convert 3tbs', () => {
    const original = {amount: 3, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(original)
  })

  it('does not convert 1/2 cup', () => {
    const original = {amount: 0.5, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(original)
  })

  it('does not convert 1/2 cup', () => {
    const original = {amount: 0.5, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(original)
  })
})

describe('rounding', () => {
  it('rounds 0.23 cups to 0.25 cups', () => {
    const original = {amount: 0.23, unit: 'cups'}
    const converted = {amount: 1 / 4, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('rounds 0.22 cups to 0.25 cups', () => {
    const original = {amount: 0.22, unit: 'cups'}
    const converted = {amount: 1 / 4, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('rounds 0.21 cups to 0.25 cups', () => {
    const original = {amount: 0.21, unit: 'cups'}
    const converted = {amount: 1 / 4, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('rounds 2.1 tbs to 2 tbs', () => {
    const original = {amount: 2.1, unit: 'tbs'}
    const converted = {amount: 2, unit: 'tbs'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('rounds 2.91 tsp to 3 tsp', () => {
    const original = {amount: 2.91, unit: 'tsp'}
    const converted = {amount: 3, unit: 'tsp'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('rounds 1/52 cup to 1 tsp', () => {
    const original = {amount: 1 / 52, unit: 'cups'}
    const converted = {amount: 1, unit: 'tsp'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('rounds 520 tsp to 10.75 cups', () => {
    const original = {amount: 520, unit: 'tsp'}
    const converted = {amount: 10.75, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('rounds 0.17 cups to 3 tbs', () => {
    const original = {amount: 0.17, unit: 'cups'}
    const converted = {amount: 2.5, unit: 'tbs'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })

  it('rounds 0.344 cups to 0.25 cups', () => {
    const original = {amount: 0.344, unit: 'cups'}
    const converted = {amount: 0.25, unit: 'cups'}
    expect(convertToAppropriateUnit(original)).toEqual(converted)
  })
})
