export function round(number: number) {
  return {
    to(roundTo: number | ((num: number) => number)) {
      let numRoundTo = typeof roundTo === 'function' ? roundTo(number) : roundTo
      return strip(Math.round(number / numRoundTo) * numRoundTo)
    },
  }
}

/** Strip unnecessary decimal values incorrectly generated from floating point arithmetic */
function strip(number: number) {
  return Number(number.toPrecision(12))
}
