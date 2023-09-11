import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function RecipeIngredients() {
  return (
    <ScalingTable>
      <Ingredient name="Frozen fruit" massInGrams={200} scalePercent={100} />
      <Ingredient name="Water" massInGrams={110} volume={0.5} volumeUnit="cups" />
      <Ingredient name="Yogurt" massInGrams={170} volume={0.75} volumeUnit="cups" />
    </ScalingTable>
  )
}

export function RecipeInstructions() {
  return (
    <Instructions>
      <Step>
        <b>Combine everything in your blender</b> and blend until smooth.
      </Step>
    </Instructions>
  )
}
