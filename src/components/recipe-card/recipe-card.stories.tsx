import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {RecipeCard} from './recipe-card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Simple Card',
  component: RecipeCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RecipeCard>

const Template: ComponentStory<typeof RecipeCard> = (args) => (
  <div className="p-16">
    <RecipeCard {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  src: 'https://picsum.photos/300/200',
  title: 'Zach is cool',
  subtitle: 'The man, the myth, the coolness',
  alt: 'random image',
}

export const Link = Template.bind({})
Link.args = {
  src: 'https://picsum.photos/600/500',
  title: 'Zach is cool',
  subtitle: 'The man, the myth, the coolness',
  alt: 'random image',
  to: 'https://www.google.com',
}
