import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function RecipeIngredients() {
  return (
    <ScalingTable>
      <Ingredient name="Vanilla ice cream" massInGrams={300} scalePercent={100} />
      <Ingredient name="Milk" massInGrams={125} volume={0.5} volumeUnit="cups" />
      <Ingredient name="Oreos" massInGrams={44} volume={3} volumeUnit="cookies" />
    </ScalingTable>
  )
}

export function RecipeInstructions() {
  return (
    <Instructions>
      <Step>
        <b>Combine everything in your blender</b> and blend until smooth.
      </Step>
      <Step>Garnish with an extra Oreo on top</Step>
    </Instructions>
  )
}
