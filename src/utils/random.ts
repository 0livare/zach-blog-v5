// Utility helper for random number generation
export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}
