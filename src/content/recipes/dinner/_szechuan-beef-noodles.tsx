import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function RecipeIngredients() {
  return (
    <ScalingTable>
      <Ingredient name="Shredded Reb Cabbage" massInGrams={113} />
      <Ingredient name="Ground Beef" massInGrams={300} scalePercent={100} />
      <Ingredient name="Ramen Noodles" massInGrams={113} />
      <Ingredient name="Beef Stock Concentrate" massInGrams={12} />
      <Ingredient name="Szechuan Paste" volume={2} volumeUnit="tbsp" massInGrams={34} />
      <Ingredient name="Sweet Soy Glaze" volume={4} volumeUnit="tbsp" massInGrams={77} />
      <Ingredient name="Sugar" volume={1} volumeUnit="tbsp" massInGrams={5} />
      <Ingredient name="Sesame seeds" volume={1} volumeUnit="tbsp" massInGrams={10} />
    </ScalingTable>
  )
}

export function RecipeInstructions() {
  return (
    <Instructions>
      <Step>Bring a medium pot of salted water to a boil.</Step>
      <Step>
        <b>Cook the meat.</b> Head a drizzle of oil in a pan over medium high heat. Add beef; cook,
        breaking up meat into pieces, until browned and cooked through, 4-6 minutes.
      </Step>
      <Step>
        <b>Stir in cabbage</b>; cook until tender, 2-3 minutes.
      </Step>
      <Step>
        <b>Cook the noodles.</b> At about the same time you put the cabbage in add the ramen noodles
        to the boiling water. Cook the noodles as advised on packaging (6 mins for Japanese thick
        noodles). Afterward drain and rinse under cold water for at least 30 seconds to stop the
        cooking process.
      </Step>
      <Step>
        <b>Flavor the meat.</b> In a small bowl combine the Szechuan Paste, Sweet Soy Glaze, stock
        concentrate, and sugar. Then add to pan with meat; stirring until the beef mixture is
        thoroughly coated in sauce. Reduce heat to low.
      </Step>
      <Step>
        <b>Add the noodles.</b> Add the noodles to the pan along with 1 tbsp butter. Stir to
        combine. Top with sesame seeds and serve!
      </Step>
    </Instructions>
  )
}
