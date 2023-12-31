import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function DoughIngredients() {
  return (
    <ScalingTable>
      <Ingredient
        name="00 wheat flour (Antico Caputo brand)"
        massInGrams={500}
        volume={3.75}
        volumeUnit="cups"
        scalePercent={100}
      />
      <Ingredient
        name="Water"
        massInGrams={310}
        volume={1 + 1 / 3}
        volumeUnit="cups"
        scalePercent={62}
      />
      <Ingredient name="Honey" massInGrams={10} volume={2} volumeUnit="tsp" scalePercent={2} />
      <Ingredient name="Salt" massInGrams={10} volume={2.5} volumeUnit="tsp" scalePercent={2} />
      <Ingredient
        name="Vital wheat gluten (Bob's Red Mill brand)"
        massInGrams={2.5}
        volume={1.5}
        volumeUnit="tsp"
        scalePercent={0.5}
      />
      <Ingredient
        name="Active dry yeast"
        massInGrams={2.5}
        volume={0.75}
        volumeUnit="tsp"
        scalePercent={0.5}
      />
      <Ingredient name="Neutral frying oil" massInGrams="as needed" />
    </ScalingTable>
  )
}

export function DoughInstructions() {
  return (
    <Instructions hideTitle className="mt-16">
      <Step>
        <b>Mix</b> in the bowl of a stand mixer with dough hook until fully incorporated. Mix on
        medium speed for 5 minutes.
      </Step>
      <Step>
        <b>Let the dough rest</b> in the bowl for 10 minutes at room temperature,and then mix again
        for 5 minutes on medium speed.
      </Step>
      <Step>
        Transfer the dough to a well-floured surface, and cut it into four 200 g chunks. Stretch and
        roll it into smooth, even balls.
      </Step>
      <Step>
        Coat the balls lightly with oil, cover them with plastic wrap, and let them rest at room
        temperature for 1 hour before using.
      </Step>
    </Instructions>
  )
}

export function SauceIngredients() {
  return (
    <ScalingTable>
      <Ingredient
        name="Garlic, minced"
        massInGrams={50}
        volume={0.25}
        volumeUnit="cups"
        scalePercent={6.5}
      />
      <Ingredient
        name="Olive Oil"
        massInGrams={100}
        volume={0.5}
        volumeUnit="cups"
        scalePercent={12.5}
      />
      <Ingredient
        name="Canned, crushed tomatoes (San Marzano or other high-quality variety)"
        massInGrams={794}
        volume="1 large can"
        scalePercent={100}
      />
    </ScalingTable>
  )
}

export function SauceInstructions() {
  return (
    <Instructions hideTitle className="mt-16">
      <Step>
        <b>Fry the garlic</b> in the olice oil for 5 minutes, or until golden brown. Stir in the
        tomatoes.
      </Step>
      <Step>
        <b>Pressure-cook</b> at a gauge pressure of 1 bar /15 psi for 45 minutes. Start timing when
        full pressure is reached. Depressurize the cooker.
      </Step>
      <Step>
        <b>Season</b> with salt to taste.
      </Step>
    </Instructions>
  )
}

export function BakingInstructions() {
  return (
    <Instructions hideTitle>
      <Step>
        <b>Preheat your oven</b> at its maximum temperature for at least an hour. Don't forget to
        put your pizza steel in!!
      </Step>
      <Step noWrapper>
        <b>Prepare the pizza.</b>
        <ol>
          <li>
            Unwrap your dough ball and lightly shape it with your thumb and forefinger into a fat
            disk
          </li>
          <li>
            Create a pile of cornmeal or semola flour about 6 inches accross and place your dough
            disk on it
          </li>
          <li>
            Use the heel of one hand (disted with cornmeal or semola) to press the edge of the dough
            outward. At the same time, use the other hand to spin the dough and repeat the motion
            until you have the desired dough thickness.
          </li>
          <li>Add your sauce and toppings</li>
        </ol>
      </Step>
      <Step>
        <b>Bake</b> for 5 to 10 minutes. The bottom of the crust should have black scorch marks.
      </Step>
    </Instructions>
  )
}
