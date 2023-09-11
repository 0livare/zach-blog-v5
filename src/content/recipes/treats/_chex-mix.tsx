import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function RecipeIngredients() {
  return (
    <ScalingTable>
      <Ingredient name="Butter (melted)" volume={1} volumeUnit="cups" massInGrams={228} />
      <Ingredient name="Worcestershire sauce" volume={4} volumeUnit="tbsp" massInGrams={56} />
      <Ingredient name="Seasoned salt" volume={4} volumeUnit="tsp" massInGrams={22} />
      <Ingredient name="Garlic powder" volume={3} volumeUnit="tsp" massInGrams={10} />
      <Ingredient name="Onion powder" volume={2} volumeUnit="tsp" massInGrams={7} />
      <Ingredient
        name="Chex cereal (corn or rice)"
        massInGrams={290}
        volume={9}
        volumeUnit="cups"
        scalePercent={100}
      />
      <Ingredient name="Pretzels" volume={3} volumeUnit="cups" massInGrams={150} />
    </ScalingTable>
  )
}
export function RecipeInstructions() {
  return (
    <Instructions>
      <Step>
        <b>Heat the oven to 250°F.</b> Arrange 2 racks to divide the oven into thirds and heat the
        oven to 250°F. Line 2 rimmed baking sheets with parchment paper.
      </Step>
      <Step>
        <b>Make the seasoning mixture.</b> Place the butter in a medium, microwave-safe bowl.
        Microwave in 10-second intervals, stirring between each, until fully melted, 50 to 60
        seconds total. (Alternatively, melt in a small saucepan on the stovetop over low heat.) Add
        the remaining wet ingredients and spaces, whisk well to combine.
      </Step>
      <Step>
        <b>Combine the Chex cereal</b> and pretzels, tossing lightly.
      </Step>
      <Step>
        <b>Toss with butter.</b> Pour half the butter mixture over the cereal mixture and toss
        gently with your hands to coat. Pour the remaining butter mixture toss again.
      </Step>
      <Step>
        <b>Bake until lightly brown and crispy</b>. Transfer the mixture onto the prepared baking
        sheets and spread into an even layer. Bake, stirring every 30 minutes, until lightly browned
        and crisp, 50 to 60 minutes total.
      </Step>
    </Instructions>
  )
}
