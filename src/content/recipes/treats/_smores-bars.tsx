import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function RecipeIngredients() {
  return (
    <ScalingTable>
      <Ingredient
        name="Unsalted butter, softened"
        massInGrams={114}
        volume={0.5}
        volumeUnit="cups"
      />
      <Ingredient name="White sugar" massInGrams={100} volume={0.5} volumeUnit="cups" />
      <Ingredient name="Brown sugar" massInGrams={50} volume={0.25} volumeUnit="cups" />
      <Ingredient name="Egg" volume={1} />
      <Ingredient name="Vanilla" volume={1} volumeUnit="tsp" />
      <Ingredient name="Baking Powder" volume={1} volumeUnit="tsp" />
      <Ingredient
        name="All Purpose Flour"
        massInGrams={156}
        volume={1.25}
        volumeUnit="cups"
        scalePercent={100}
      />
      <Ingredient name="Corse Kosher Salt" volume={1} volumeUnit="tsp" />
      <Ingredient
        name="Graham crackers, crushed into crumbs (1 graham cracker = 1 rectangle)"
        volume={6}
      />
      <Ingredient name="Peanut Butter" massInGrams={129} volume={0.5} volumeUnit="cups" />
      <Ingredient name="Chocolate Bars" massInGrams={227} volume={2} volumeUnit="extra big bars" />
      <Ingredient name="Marshmallow Cream" massInGrams={200} />
    </ScalingTable>
  )
}

export function RecipeInstructions() {
  return (
    <Instructions>
      <Step>
        <b>Prep</b>: Preheat the oven to 350 degrees.
      </Step>
      <Step>
        <b>Cookie Base</b>: Beat the butter and both sugars. Mix in the egg and vanilla. Mix in the
        flour, baking powder, and salt. Stir in the graham cracker crumbs.
      </Step>
      <Step>
        <b>Make a top layer</b>: Line an 8×8 baking dish with parchment. Press half of the dough
        into the bottom of the pan. Lift out the parchment with the dough on it and set it aside –
        this will be your top cookie layer.
      </Step>
      <Step>
        <b>Assembly</b>: Line again with parchment and press the remaining dough into the bottom of
        the pan. Layer with the chocolate bars, peanut butter, and marshmallow creme. Gently flip
        and place the prepared top cookie layer onto the top of the bars and peel the parchment off
        the top.
      </Step>
      <Step>
        <b>Bake</b>: Bake for 30 minutes or until golden brown on top.
      </Step>
      <Step>
        <b>Resting Time</b>: For the cleanest slices, I like to let the bars rest for 4-6 hours or
        give them a bit of time in the fridge so they can solidify enough for a clean cut! More info
        in the notes.
      </Step>
    </Instructions>
  )
}
