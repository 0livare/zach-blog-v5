import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function RecipeIngredients() {
  return (
    <ScalingTable>
      <Ingredient name="Butter" massInGrams={73} volume={5} volumeUnit="tbsp" />
      <Ingredient name="Crispie cereal" massInGrams={175} volume={6} volumeUnit="cups" />
      <Ingredient
        name="Marshmellows"
        massInGrams={415}
        volume={8}
        volumeUnit="cups"
        scalePercent={100}
      />
      <Ingredient name="Mini marshmellows" massInGrams={100} volume={2} volumeUnit="cups" />
      <Ingredient name="Salt" massInGrams={1.2} volume={0.5} volumeUnit="tsp" />
    </ScalingTable>
  )
}

export function RecipeInstructions() {
  return (
    <Instructions>
      <Step>
        <b>Line a 9×9 pan</b> with foil and spray lightly with cooking spray, set aside.
      </Step>
      <Step>
        <b>Melt butter.</b> In a large pot over low heat melt butter. Once butter s melted add in 8
        cups mini marshmallows, stirring constantly.
      </Step>
      <Step>
        <b>Stir in marshmellows.</b> Once the marshmallows are just melted remove from heat and stir
        in your cereal and salt until just coated in marshmallow mixture. Now stir in the remaining
        2 cups of mini marshmallows.
      </Step>
      <Step>
        Pour mixture into prepared pan and press in evenly. Be gentle though, you don't want to lose
        the air in the treats.
      </Step>
      <Step>
        <b>Allow to cool</b> completely before cutting into squares.
      </Step>
    </Instructions>
  )
}
