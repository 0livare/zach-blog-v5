import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function RecipeIngredients() {
  return (
    <ScalingTable>
      <Ingredient name="Olive Oil" volume={2} volumeUnit="tbsp" />
      <Ingredient name="Rigatoni Pasta" volume={0.5} volumeUnit="lb" massInGrams={454} />
      <Ingredient
        name="Smoked Sausage, sliced into ¼ pieces"
        massInGrams={396}
        scalePercent={100}
      />
      <Ingredient name="Unsalted Butter" volume={2} volumeUnit="tbsp" />
      <Ingredient name="Medium Red Onion, sliced" volume={0.5} />
      <Ingredient name="Red Bell Pepper, sliced" volume={1} />
      <Ingredient name="Green Bell Pepper, sliced" volume={1} />
      <Ingredient name="Garlic, minced" volume={3} volumeUnit="Cloves" />
      <Ingredient name="Tomato Paste" volume={2} volumeUnit="tbsp" />
      <Ingredient name="Heavy Cream" volume={3} volumeUnit="cups" />
      <Ingredient name="Chicken Broth" volume={0.5} volumeUnit="cups" />
      <Ingredient name="Kosher Salt, or to taste" volume={0.5} volumeUnit="tsp" />
      <Ingredient name="Black Pepper, or to taste" volume={2} volumeUnit="tsp" />
      <Ingredient name="Garlic Powder" volume={1} volumeUnit="tsp" />
      <Ingredient name="Cumin" volume={1} volumeUnit="tsp" />
      <Ingredient name="Italian Seasoning" volume={1} volumeUnit="tsp" />
      <Ingredient name="Smoked Paprika" volume={1} volumeUnit="tsp" />
      <Ingredient name="Chili Powder" volume={0.5} volumeUnit="tsp" />
      <Ingredient
        name="Pasta Water, from cooked pasta"
        volume={0.25}
        volumeUnit="cups"
        massInGrams={59}
      />
      <Ingredient name="Parmesan Cheese, shredded" volume={1} volumeUnit="cups" />
      <Ingredient name="Italian Parsley, minced" />
    </ScalingTable>
  )
}

export function RecipeInstructions() {
  return (
    <Instructions>
      <Step>
        <b>Cook Pasta.</b> according to packaging. I recommend boiling 1 Pound of Pasta in 4 Quarts
        of Water with 2 Tablespoons Kosher Salt until Al-Dente (about 8-10 minutes). Save some of
        the pasta water that was used to boil the pasta for later steps.
      </Step>

      <Step>
        <b>Cook Sausage.</b> In a skillet on medium heat, add in sliced smoked sausage and cook for
        about 1-2 minutes on each side. We're looking to brown the sausages on each side. Once
        sausage is done cooking, remove from the skillet and set aside.
      </Step>

      <Step>
        <b>Cook onion, then peppers, then garlic.</b> For our sauce, in the same skillet that was
        used to cook our sausage, add in butter. Once butter is melted, add in sliced onion and cook
        for 1 minute. Next, add in red bell pepper & green bell pepper. Add in a pinch of salt, and
        cook for another minute. Then, add in minced garlic and cook for about 30 seconds.
      </Step>

      <Step>
        <b>Mix in tomato paste & chicken broth</b>, and bring to a simmer. Begin to scrape up bits
        at the bottom of the skillet.
      </Step>

      <Step>
        <b>Add in heavy cream and all the spices</b> and mix in well. Continuously stir sauce,
        slightly turn up heat, and bring sauce to a high simmer.
      </Step>

      <Step>
        <b>Add pasta water and simmer.</b> Once the sauce is at a high simmer, slightly reduce heat
        and add in ¼ cup of pasta water from cooked pasta. Mix in well, and simmer sauce for about
        10 minutes to thicken.
      </Step>

      <Step>
        Remove sauce from heat and let cool for about 2 minutes to continue to thicken. Next, mix in
        parmesan cheese. Then, toss in cooked pasta and sausage. Sprinkle on Italian parsley and
        additional parmesan cheese if you would like. Enjoy!
      </Step>
    </Instructions>
  )
}
