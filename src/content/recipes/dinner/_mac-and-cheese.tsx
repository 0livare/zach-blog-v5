import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function RecipeIngredients() {
  return (
    <ScalingTable>
      <Ingredient name="Bacon" massInGrams={227} volume={0.5} volumeUnit="lb" />
      <Ingredient name="Milk or water" massInGrams={265} volume={1.125} volumeUnit="cups" />
      <Ingredient name="Sodium citrate" massInGrams={11} />
      <Ingredient
        name="Cheddar cheese, finely grated"
        massInGrams={285}
        volume={4}
        volumeUnit="cups"
        scalePercent={100}
      />
      <Ingredient name="Water" massInGrams="As needed for cooking pasta" />
      <Ingredient name="Dry macaroni" massInGrams={240} volume={2} volumeUnit="cups" />
      <Ingredient name="Salt" massInGrams="To taste" />
    </ScalingTable>
  )
}

export function RecipeInstructions() {
  return (
    <Instructions>
      <Step>Pan fry or bake bacon to your satisfaction.</Step>
      <Step>
        Combine milk (or water if you're out of milk) and sodium citrate in a pot, whisk to
        dissolve, and bring to a simmer over medium heat.
      </Step>
      <Step>
        Add cheese into the simmering liquid gradually, blending each addition with an immersion
        blender until melted and completely smooth.
      </Step>
      <Step>
        Bring a large pot of water to a boil. Boil noodles until al dente according to the package
        directions, 5-6 minutes.
      </Step>
      <Step>Drain. Do not rinse pasta.</Step>
      <Step>Stir in the warm cheese sauce, and fold in bacon.</Step>
      <Step>Season with salt and serve immediately.</Step>
    </Instructions>
  )
}
