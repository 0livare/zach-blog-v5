import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function RecipeIngredients() {
  return (
    <ScalingTable>
      <Ingredient
        name="Semisweet chocolate chips"
        massInGrams={240}
        volume={1}
        volumeUnit="cups"
        scalePercent={100}
      />
      <Ingredient name="Creamy peanut butter" massInGrams={256} volume={1} volumeUnit="cups" />
      <Ingredient name="Chex cereal" massInGrams={193} volume={6} volumeUnit="cups" />
      <Ingredient name="Powdered sugar" massInGrams={240} volume={2} volumeUnit="cups" />
    </ScalingTable>
  )
}

export function RecipeInstructions() {
  return (
    <Instructions>
      <Step>
        <b>Melt peanut butter and chocolate</b> together, either on the stovetop or in the
        microwave.
      </Step>
      <Step>
        Add half the cereal to a large bowl. Pour half of the chocolate mixture over the cereal.
      </Step>
      <Step>Add remaining cereal to the bowl and pour remaining chocolate on top.</Step>
      <Step>
        <b>Stir</b> until the cereal is evenly coated. If there are pools of chocolate/peanut butter
        at the bottom of your bowl, add more cereal ¼ cup at a time until all that deliciousness is
        coating your cereal. Remember we WANT clumps, so do NOT add too much cereal!
      </Step>
      <Step>
        <b>Let the mixture cool</b> slightly (I throw mine in the fridge or outside on my porch if
        it's cold out). You do not want it to harden!
      </Step>
      <Step>
        Once your mixture is at or below room temperature, add 1 cup of powdered sugar. Mix until
        combined.
      </Step>
      <Step>Let cool for about 15 minutes.</Step>
      <Step>
        <b>Add more powdered sugar</b> ¼ cup at a time until your cereal is coated to your
        satisfaction.
      </Step>
      <Step>Store in an airtight container at room temperature.</Step>
    </Instructions>
  )
}
