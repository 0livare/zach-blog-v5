import {ScalingTable, Ingredient, Instructions, Step} from '~/components'

export function RecipeIngredients() {
  return (
    <ScalingTable>
      <Ingredient name="Unsalted butter" massInGrams={227} volume={1} volumeUnit="cups" />
      <Ingredient name="All purpose flour" massInGrams={250} volume={2} volumeUnit="cups" />
      <Ingredient name="Baking soda" massInGrams={6} volume={1} volumeUnit="tsp" />
      <Ingredient name="Kosher salt" volume={0.75} volumeUnit="tsp" />
      <Ingredient name="Dark brown sugar" massInGrams={215} volume={1} volumeUnit="cups" />
      <Ingredient name="Granulated sugar" massInGrams={73} volume={0.33} volumeUnit="cups" />
      <Ingredient name="Large eggs, room temperature" volume={2} />
      <Ingredient name="Vanilla extract" volume={2} volumeUnit="tsp" />
      <Ingredient
        name="Chocolate toffee bars  (preferably Skor), chopped into ¼-inch pieces"
        massInGrams={80}
        volume={1.8}
        volumeUnit="oz"
      />
      <Ingredient
        name="Chocolate wafers (disks, pistoles, fèves; preferably 72% cacao) "
        massInGrams={216}
        volume={1.5}
        volumeUnit="cups"
        scalePercent={100}
      />
      <Ingredient name="Flaky sea salt (Maldon)" volume="To taste" />
    </ScalingTable>
  )
}

export function RecipeInstructions() {
  return (
    <Instructions>
      <Step>
        <b>Cook the butter</b> in a medium saucepan over medium heat, stirring often, until it
        foams, then browns, 5–8 minutes. Scrape into a large bowl and let cool slightly, until cool
        enough to touch (like the temperature of a warm bath), about 10 minutes.
      </Step>
      <Step>
        <b>Make the dough.</b> Add brown sugar and granulated sugar to browned butter. Using an
        electric mixer on medium speed, beat until incorporated, about 1 minute. Add eggs and
        vanilla, increase mixer speed to medium-high, and beat until mixture lightens and begins to
        thicken, about 1 minute. Reduce mixer speed to low; add dry ingredients and beat just to
        combine.
      </Step>
      <Step>
        <b>Mix in toffee pieces</b> and chocolate wafers with a wooden spoon or rubber spatula.
      </Step>
      <Step>
        <b>Let dough sit</b> at room temperature at least 30 minutes to allow flour to hydrate.
        Dough will look very loose at first, but will thicken as it sits.
      </Step>
      <Step>
        <b>Scoop onto baking sheet.</b> Place a rack in middle of oven; preheat to 375°. Using a
        1-oz. ice cream scoop, portion out balls of dough and place on a parchment-lined baking
        sheet, spacing about 3" apart (you can also form dough into ping pong–sized balls with your
        hands). Do not flatten; cookies will spread as they bake.
      </Step>
      <Step>Sprinkle with sea salt.</Step>
      <Step>
        <b>Bake</b> cookies until edges are golden brown and firm but centers are still soft, 9–11
        minutes. Let cool on baking sheets 10 minutes, then transfer to a wire rack and let cool
        completely. Repeat with remaining dough and a fresh parchment-lined cooled baking sheet.
        <br />
        <br />
        <b>Do Ahead</b>: Cookie dough can be made 3 days ahead; cover and chill. Let dough come to
        room temperature before baking.
      </Step>
    </Instructions>
  )
}
